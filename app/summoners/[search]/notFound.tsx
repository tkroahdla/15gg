"use client"
import React from "react"

interface INotFoundProps {
    summonerName: string,
}

function NotFound(props: INotFoundProps): JSX.Element {
    return (
        <div className="flex space-x-5 bg-white p-4 w-full rounded-xl border-2 border-[#a1060685]">
            <div className="flex flex-col space-y-3 font-bold text-xl">
                <span>존재하지 않는 소환사입니다.</span>
                <span>소환사명이 정확한지 확인해주세요 ( {props.summonerName} )</span>
            </div>
        </div>
    )
}

export default React.memo(NotFound)