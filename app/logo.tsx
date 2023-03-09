"use client"

import { useRouter } from "next/navigation";

export default function Logo() {
    const router = useRouter();
    return (
        <div className='font-semibold italic text-3xl text-white p-4 cursor-pointer inline-block' onClick={() => router.push(`/`)}>15GG</div>
    )
}