"use client"
import SearchBar from "./searchBar";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl ">
      <div className="flex justify-center items-center min-h-[80vh]">
        <SearchBar></SearchBar>
      </div>
    </div>
  )
}
