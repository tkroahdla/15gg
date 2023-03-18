"use client"
import React from "react"
import ChampionIcon from "../championIcon"
import ItemBox from "../item/itemBox"
import KdaBox from "../kdaBox"
import { IParticipants } from "./matchDetail"
import RuneIcon from "../runeIcon"
import SpellIcon from "../spellIcon"

interface IMatchMyChampProps {
    myInfo: IParticipants
    items: number[];
}

function MatchMyChampBox(props: IMatchMyChampProps) {
    return (

        <div className="flex-col space-y-3">
            <div className="flex items-center space-x-1">
                <div className="flex justify-start">
                    <div className="w-12 h-12 relative">
                        <ChampionIcon championName={props.myInfo?.championName!} />
                        <div className="absolute w-full top-8 left-4 flex justify-center align-middle items-center ">
                            <span className="w-5 h-5 text-center text-xs bg-white rounded-3xl border-[#038eff70] border-2">{props?.myInfo?.champLevel}</span>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-0.5">
                    <div className="space-y-0.5">
                        <SpellIcon spellIconId={props?.myInfo?.summoner1Id}></SpellIcon>
                        <SpellIcon spellIconId={props?.myInfo?.summoner2Id}></SpellIcon>
                    </div>
                    <div className="space-y-0.5">
                        <RuneIcon runeIconId={props?.myInfo?.perks?.styles[0]?.selections[0]?.perk} />
                        <RuneIcon runeIconId={parseInt(String(props?.myInfo?.perks?.styles[1]?.selections[0]?.perk / 100))} />
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    {props?.myInfo && <KdaBox kills={props?.myInfo.kills} assists={props?.myInfo.assists} deaths={props?.myInfo.deaths} />}
                </div>
            </div>
            {props?.items && <ItemBox itemIds={props?.items} />}

        </div>

    )
}

export default React.memo(MatchMyChampBox)