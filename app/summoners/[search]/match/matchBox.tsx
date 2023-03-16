"use client"

import React from "react"
import MatchDetail from "./matchDetail"

interface MatchBoxProps {
    matchIds: string[]
    summonerName: string
}

function MatchBox(props: MatchBoxProps) {
    return (
        <div className="bg-white p-4 w-full space-y-3 rounded-xl border-2 border-[#a1060685]">
            {props?.matchIds?.map((matchId) => (
                < MatchDetail key={matchId} matchId={matchId} summonerName={props.summonerName} />
            ))}
        </div >
    )
}

export default React.memo(MatchBox)