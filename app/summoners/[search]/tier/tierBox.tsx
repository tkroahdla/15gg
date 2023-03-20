"use client"
import parseRankAndTier from "@/lib/parseRankAndTier";
import React, { useEffect, useState } from "react";
import { IRankData } from "../page";
import TierDetail from "./tierDetail";
import TierIcon from "./tierIcon";

interface ITierIconProps {
    rankInfo: IRankData[]
}

function TierBox(props: ITierIconProps) {
    const [data, setData] = React.useState<IRankData[]>()

    React.useEffect(() => {
        if (props.rankInfo) {
            const { rankData } = parseRankAndTier(props.rankInfo)
            setData(rankData)
        }
    }, [props.rankInfo])


    return (
        <>
            {data &&
                <div className="flex space-x-3 ">
                    <div className="w-[50%] h-full">
                        <TierDetail leagueType={"솔로랭크 5x5"} rankData={data[0]} />
                    </div>

                    <div className="w-[50%] h-full">
                        <TierDetail leagueType={"자유랭크 5x5"} rankData={data[1]} />
                    </div>
                </div>}
        </>

    )
}

export default React.memo(TierBox)