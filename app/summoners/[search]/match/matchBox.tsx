"use client"

import React from "react"
import MatchDetail from "./matchDetail"

interface MatchBoxProps {
    matchIds: string[]
    summonerId: string
}

function MatchBox(props: MatchBoxProps) {
    return (
        <>
            {(props?.matchIds && props?.summonerId) &&
                <div className="bg-white p-4 w-full space-y-3 rounded-xl border-2 border-[#a1060685]">
                    {props?.matchIds?.map((matchId) => (
                        <MatchDetail key={matchId} matchId={matchId} summonerId={props.summonerId} />
                    ))}
                </div >}
        </>

    )
}

export default React.memo(MatchBox)