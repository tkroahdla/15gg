"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react"

interface SearchForm {
    search: string
}

export default function SearchBar() {
    const router = useRouter();
    const [search, setSearch] = useState<string>("");
    const { register, handleSubmit, watch } = useForm<SearchForm>();

    const handleSearch = async (formData: SearchForm) => {
        if (search == "") return
        setSearch(formData.search)
        router.push(`/summoners/${encodeURIComponent(search)}`)
    }

    const keyword = watch("search")

    React.useEffect(() => {
        setSearch(keyword)
    }, [keyword])


    return (
        <div className="flex flex-col items-center space-y-5">
            <div className='font-semibold italic text-3xl text-white'>15GG</div>
            <form onSubmit={handleSubmit(handleSearch)} className=" flex items-center">
                <input
                    type="text"
                    className="h-8 sm:w-64 md:w-80 lg:w-96 xl:w-[28rem] border-0 rounded-l-full text-xs pl-4 bg-white"
                    placeholder="소환사명"
                    {...register("search")} />
                <button className="h-8 w-8 bg-[#cabeb3] border-0 rounded-r-full text-xs text-white">GG</button>
            </form>
        </div>
    )
}
