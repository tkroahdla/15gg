import parseRankAndTier from "@/lib/parseRankAndTier";
import React from "react";
import { IRankData } from "./page";
import TierIcon from "./tierIcon";

interface ITierIconProps {
    rankInfo: IRankData[]
}

function TierInfoBox(props: ITierIconProps) {
    const { rankData } = parseRankAndTier(props.rankInfo)

    return (
        <div className="flex flex-col">
            <span>솔로랭크</span>
            <div className="flex justify-start items-center space-x-3">
                {rankData[0] && <TierIcon tier={rankData[0].tier!} />}
                <span>{rankData[0].tier} {rankData[0].rank}</span>
                {typeof rankData[0].leaguePoints == "number" && <span>{rankData[0]?.leaguePoints}LP</span>}
            </div>

            <span>자유랭크</span>
            <div className="flex justify-start items-center space-x-3">
                {rankData[1] && <TierIcon tier={rankData[1].tier!} />}
                <span>{rankData[1].tier} {rankData[1].rank} </span>
                {typeof rankData[1].leaguePoints == "number" && <span>{rankData[1]?.leaguePoints}LP</span>}

            </div>
        </div>

    )
}

export default React.memo(TierInfoBox)