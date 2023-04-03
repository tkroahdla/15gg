"use client"

import { ko, QUEUETYPE } from "@/app/types/queueType"
import getTime from "@/lib/getTime"
import isReGame from "@/lib/isReGame"
import { cls } from "@/lib/utils"
import React from "react"
import MatchDetail, { IMatchInfo, IParticipants } from "./matchDetail"

interface MatchBoxProps {
    matchInfo: IMatchInfo
    myInfo: IParticipants
}

function MatchInfo(props: MatchBoxProps) {
    return (
        <div className={cls("flex flex-col items-center justify-center p-2",
            "phone35:flex-row phone35:space-x-3 phone35:justify-start",
            "sm:flex-col sm:w-24"
        )}>
            <div></div>
            <div className="w-20 flex-col items-start phone35:flex-row phone35:justify-start sm:flex-row ">
                <div className={cls("font-semibold", props?.myInfo?.win ? "text-blue-500" : "text-red-500")}>{ko?.[QUEUETYPE?.[props.matchInfo?.queueId!]]}</div>
                <div>{getTime(props.matchInfo?.gameEndTimestamp!)}</div>
            </div>

            <div className={cls("flex justify-start items-center w-full rounded-full h-1 dark:bg-gray-700 py-2 ",
                "phone35:hidden",
                "sm:block")}>
                <div className="bg-[#2c1a2531] h-1 rounded-full w-full " ></div>
            </div >

            <div className="w-20 flex-col items-start">
                <div className="font-semibold">{isReGame(props.matchInfo?.gameDuration!) ? <span>다시하기</span> : (props?.myInfo?.win ? <span>승리</span> : <span>패배</span>)}</div>
                <div> {(props.matchInfo?.gameDuration! / 60).toFixed(0)}분 {(props.matchInfo?.gameDuration! % 60).toFixed(0)}초</div>
            </div>
        </div >
    )
}

export default React.memo(MatchInfo)