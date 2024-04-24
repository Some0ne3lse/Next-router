"use client";
import GlobalHeader from "../components/Header";
import AdminButton from "./components/AdminButton";
import Expenses from "./components/Expenses";

export default function Home() {
  return (
    <>
      <GlobalHeader />
      <Expenses />
    </>
  );
}
