"use client";
import Image from "next/image";
import profileImage from "../../../public/profile.png";
import GlobalHeader from "../components/Header";

const HEADERNAME = "Thor Ib Wessman";
const HEADERDESCRIPTION = "Programmer in development";

const DATA = [
  {
    id: 0,
    title: "Sky Lagoon",
    subTitle: "August 2023 - Present",
    description: "Frontline staff. Bartending, receiving guests etc.",
  },
  {
    id: 1,
    title: "FlyOver Iceland",
    subTitle: "2020 - 2023",
    description: "Guest experience guide, ticketing and team lead.",
  },
  {
    id: 2,
    title: "Pósturinn",
    subTitle: "2017 - 2019",
    description: "Postman in Kópavogur.",
  },
  {
    id: 3,
    title: "Fosshótel Núpar",
    subTitle: "2015 - 2016",
    description:
      "Receptionist. Receiving guests and bookings. Writing the restaurant menu, and other tasks.",
  },
  {
    id: 4,
    title: "Klatreskoven.dk (Adventure Park)",
    subTitle: "2015",
    description:
      "Instructor. I assisted in building the Roskilde division from the beginning.",
  },
  {
    id: 5,
    title: "Spar shop in Udby",
    subTitle: "2008 - 2011",
    description: "Worked with sorting bottles and as a cashier.",
  },
  {
    id: 6,
    title: "Tuse Næs gymnastics hall (íþróttamiðstöð)",
    subTitle: "2007 - 2009",
    description: "Taught children gymnastics once a week.",
  },
];

type HeaderProps = {
  name: string;
  aboutMe: string;
};

const Header = ({ name, aboutMe }: HeaderProps) => {
  return (
    <>
      <div className="cd-header">
        <div>
          <h1 className="cv-name">{name}</h1>
          <h2 className="cv-about-me">{aboutMe}</h2>
        </div>
        <Image
          src={profileImage}
          alt="A picture of me!"
          className="cv-image"
          priority
        />
      </div>
    </>
  );
};

type ContentProps = {
  data: typeof DATA;
};

const Content = (props: ContentProps) => {
  return (
    <div className="cv-previous-jobs">
      {props.data.map((item) => (
        <div className="cv-individual-job" key={item.id}>
          <h3 className="cv-title">{item.title}</h3>
          <p className="cv-time-at-work">{item.subTitle}</p>
          <p className="cv-job-description">{item.description} </p>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="entire-cv">
      <GlobalHeader />
      <Header name={HEADERNAME} aboutMe={HEADERDESCRIPTION} />
      <Content data={DATA} key={"c0"} />
    </div>
  );
}
