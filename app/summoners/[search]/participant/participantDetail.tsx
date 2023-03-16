"use client"

import { useRouter } from "next/navigation"
import React from "react"
import ChampionIcon from "../championIcon"
import { IDevidedTeam, IParticipants } from "../match/matchDetail"

interface ParticipantDetailProps {
    participants: IParticipants[]
}

function ParticipantDetail(props: ParticipantDetailProps) {
    const router = useRouter();

    const handleSummonerNameClick = (summonerName: string) => {
        router.push(`/summoners/${summonerName}`)
    }

    return (
        <div className="flex-col w-28">
            {props?.participants?.map(participant => (
                <div key={participant?.championName} className="flex space-x-1 space-y-0.5">
                    <div className="flex">
                        <div className="relative w-5 h-5">
                            <ChampionIcon championName={participant?.championName} />
                        </div>
                    </div>
                    <span className="ellipsis hover:underline cursor-pointer" onClick={() => handleSummonerNameClick(participant?.summonerName)}>{participant?.summonerName}</span>
                    <div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default React.memo(ParticipantDetail)