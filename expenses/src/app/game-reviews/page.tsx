"use client";

import GlobalHeader from "../components/Header";
import GameReviews from "./GameReviews";

export default function Home() {
  return (
    <div className="review-page">
      <GlobalHeader />
      <GameReviews />
    </div>
  );
}
