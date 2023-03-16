"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import React from "react"

interface SearchForm {
    search: string
}

export default function MiniSearchBar() {
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
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit(handleSearch)} className="flex items-center ">
                <input
                    type="text"
                    className="h-8 w-36 border-0 text-xs pl-3 bg-white rounded-l-lg"
                    placeholder="소환사명"
                    {...register("search")} />
                <button className="h-8 w-8 bg-[#cabeb3] border-0 text-xs rounded-r-lg">GG</button>
            </form>
        </div>
    )
}
