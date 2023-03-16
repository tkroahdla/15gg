"use client"

import React from "react"
import ChampionIcon from "../championIcon"
import { IDevidedTeam, IParticipants } from "../match/matchDetail"
import ParticipantDetail from "./participantDetail"

interface ParticipantBoxProps {
    team: IDevidedTeam
}

function ParticipantBox(props: ParticipantBoxProps) {
    return (
        <>
            <ParticipantDetail participants={props?.team?.team1} />
            <ParticipantDetail participants={props?.team?.team2} />
        </>
    )
}

export default React.memo(ParticipantBox)