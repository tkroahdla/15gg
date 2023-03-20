"use client"
import getKillParticipation from "@/lib/getKillParticipation"
import React from "react"
import { IParticipants, ITeams } from "./match/matchDetail"

interface IEtcBoxProps {
    myTeam?: ITeams
    myInfo?: IParticipants
}

function EtcBox(props: IEtcBoxProps) {
    return (
        <>
            {(props.myTeam && props.myInfo) &&
                <div className="flex-col justify-start grow-[1] ml-5 text-xs font-semibold space-y-2">
                    <div className="text-red-500">킬관여 {getKillParticipation(props.myTeam.objectives.champion.kills, props.myInfo.kills, props.myInfo.assists)}% </div>
                    <div>제어 와드  {props.myInfo.wardsPlaced}</div>
                    <div>CS {props.myInfo.totalMinionsKilled}</div>
                </div>
            }
        </>

    )
}

export default React.memo(EtcBox)