"use client"

import { ko, QUEUETYPE } from "@/app/types/queueType"
import getTime from "@/lib/getTime"
import isReGame from "@/lib/isReGame"
import React from "react"
import MatchDetail, { IMatchInfo, IParticipants } from "./matchDetail"

interface MatchBoxProps {
    matchInfo: IMatchInfo
    myInfo: IParticipants
}

function MatchInfo(props: MatchBoxProps) {
    return (
        <div className="flex-col grow-0 items-center justify-center p-3">
            <div>{ko?.[QUEUETYPE?.[props.matchInfo?.queueId!]]}</div>
            <div> {getTime(props.matchInfo?.gameEndTimestamp!)}</div>
            <div className=" flex justify-center items-center w-full rounded-full h-2 dark:bg-gray-700">
                <div className="bg-[#2c1a2531] h-1 rounded-full w-full" ></div>
            </div >
            <div>{isReGame(props.matchInfo?.gameDuration!) ? <span>다시하기</span> : (props?.myInfo?.win ? <span>승리</span> : <span>패배</span>)}</div>
            <div> {(props.matchInfo?.gameDuration! / 60).toFixed(0)}분 {(props.matchInfo?.gameDuration! % 60).toFixed(0)}초</div>
        </div>
    )
}

export default React.memo(MatchInfo)