"use client"
import React from "react"
import { IRankData, ISummonerData } from "../page"
import ProfileIcon from "./profileIcon"
import TierBox from "../tier/tierBox"



interface IProfileBoxProps {
    summonerInfo: ISummonerData,
    rankInfo: IRankData[]
}

function ProfileBox(props: IProfileBoxProps) {
    return (
        <>
            <div className="flex space-x-5 bg-white p-4 w-full rounded-xl border-2 border-[#a1060685]">
                <div  >
                    <ProfileIcon profileIconId={props.summonerInfo.profileIconId} profileLevel={props.summonerInfo.summonerLevel} />
                </div>
                <div className="font-bold text-2xl">
                    <>{props.summonerInfo.name}</>
                </div>
            </div>
        </>
    )
}

export default React.memo(ProfileBox)