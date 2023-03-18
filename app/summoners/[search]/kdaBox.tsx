"use client"
import React from "react"

interface IKdaBoxProps {
    kills: number
    deaths: number
    assists: number
}

function KdaBox(props: IKdaBoxProps) {
    return (
        <div className="font-bold">
            <span>{props?.kills}</span>
            <span> / </span>
            <span className="text-[#ff3737ce]">{props?.deaths}</span>
            <span> / </span>
            <span>{props?.assists}</span>
        </div>
    )
}

export default React.memo(KdaBox)