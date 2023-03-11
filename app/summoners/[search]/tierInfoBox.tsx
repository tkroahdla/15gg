import parseRankAndTier from "@/lib/parseRankAndTier";
import React from "react";
import { IRankData } from "./page";
import TierDetail from "./tierDetail";
import TierIcon from "./tierIcon";

interface ITierIconProps {
    rankInfo: IRankData[]
}

function TierInfoBox(props: ITierIconProps) {
    const { rankData } = parseRankAndTier(props.rankInfo)

    return (
        <div className="flex space-x-3">
            <div className="w-full">
                <TierDetail leagueType={"솔로랭크 5x5"} rankData={rankData[0]} />
            </div>

            <div className="w-full">
                <TierDetail leagueType={"자유랭크 5x5"} rankData={rankData[1]} />
            </div>
        </div>

    )
}

export default React.memo(TierInfoBox)