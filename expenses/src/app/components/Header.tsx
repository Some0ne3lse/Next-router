"use client";

import { useRouter } from "next/navigation";

export default function GlobalHeader() {
  const router = useRouter();
  return (
    <div className="page-header">
      <h1>My React Projects</h1>
      <button className="header-buttons" onClick={() => router.push("/")}>
        Home Page
      </button>
      <button
        className="header-buttons"
        onClick={() => router.push("/expenses")}
      >
        Expenses App
      </button>
      <button
        className="header-buttons"
        onClick={() => router.push("/game-reviews")}
      >
        Game Reviews
      </button>
    </div>
  );
}
