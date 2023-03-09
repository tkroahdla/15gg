"use client"
import React from "react"
import { IRankData, ISummonerData } from "./page"
import ProfileIcon from "./profileIcon"
import TierInfoBox from "./tierInfoBox"



interface IProfileBoxProps {
    summonerInfo: ISummonerData,
    rankInfo: IRankData[]
}

function ProfileBox(props: IProfileBoxProps) {
    return (
        <>
            <div className="flex space-x-5 bg-white p-4 w-full rounded-xl">
                <div >
                    <ProfileIcon profileIconId={props.summonerInfo.profileIconId} profileLevel={props.summonerInfo.summonerLevel} />
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="font-bold text-2xl">
                        {props.summonerInfo.name}
                    </div>
                    {props.rankInfo.length > 0 && <TierInfoBox rankInfo={props.rankInfo} />}
                </div>
            </div>
        </>
    )
}

export default React.memo(ProfileBox)