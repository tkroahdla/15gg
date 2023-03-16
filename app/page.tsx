"use client"
import { useEffect, useState } from "react";
import SearchBar from "./searchBar";

export default function Home() {

  return (
    <div className="mx-auto w-full max-w-4xl ">
      <div className="flex justify-center items-center min-h-[80vh]">
        <SearchBar></SearchBar>
      </div>
    </div>
  )
}
