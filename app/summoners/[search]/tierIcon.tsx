"use client"
import Image from "next/image";
import React from "react"
import { ISummonerData } from "./page"

interface ITierIconProps {
    tier: string;
}

function TierIcon(props: ITierIconProps) {
    return (
        <>
            {props?.tier &&
                <div className="w-12 h-12 relative">
                    <Image
                        alt="tierIcon"
                        src={`/images/tier/${props.tier}.png`}
                        fill={true}
                        style={{ objectFit: "contain" }}
                        className="rounded-2xl"
                        draggable="false"
                    />
                </div>}

        </>
    )


}

export default React.memo(TierIcon)