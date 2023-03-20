"use client"

import handleRemainder from "@/lib/handleRemainder"
import React from "react"
import { IRankData } from "../page"
import TierIcon from "./tierIcon"

interface TierDetailProps {
    rankData: IRankData
    leagueType: string
}

function TierDetail({ rankData, leagueType }: TierDetailProps) {
    const winsRate = (rankData.wins! / (rankData.wins! + rankData.losses!) * 100).toFixed(2);
    const roundDownRate = handleRemainder(Number(winsRate))
    return (
        <div className="text-xs sm:text-sm md:text-lg lg:text-lg h-36 flex flex-col justify-center bg-white rounded-xl p-4 border-2 border-[#a1060685]">
            <span className="text-base">{leagueType}</span>
            <div className="flex justify-start items-center space-x-5">
                <TierIcon tier={rankData.tier!} />
                <div className="flex flex-col">
                    <span>{rankData.tier} {rankData.rank} </span>
                    {rankData.tier != "UNRANKED" &&
                        <div className="flex space-x-3">
                            {typeof rankData.leaguePoints == "number" && <span>{rankData?.leaguePoints}LP</span>}
                        </div>
                    }
                    {rankData.tier != "UNRANKED" &&
                        <>
                            <div className="space-x-1">
                                {/* <span>{rankData.wins! + rankData.losses!}전</span> */}
                                <span>{rankData.wins}승</span>
                                <span>{rankData.losses}패</span>

                            </div>
                            <span>{roundDownRate}%</span>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}

export default React.memo(TierDetail)