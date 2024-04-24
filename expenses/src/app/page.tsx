"use client";
import { useRouter } from "next/navigation";
import GlobalHeader from "./components/Header";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <GlobalHeader />
      <div className="intro">
        <h1>Welcome!</h1>
        <h2>This is where my stuff is</h2>
      </div>
    </>
  );
}
