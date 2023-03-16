"use client"
import Image from "next/image";
import React from "react"

interface ITierIconProps {
    tier: string;
}

function TierIcon(props: ITierIconProps) {
    return (
        <>
            {props?.tier &&
                <div className="w-20 h-20 relative">
                    <Image
                        alt="tierIcon"
                        src={`/images/tier/${props.tier}.png`}
                        fill={true}
                        style={{ objectFit: "contain" }}
                        className="rounded-2xl"
                        draggable="false"
                        sizes="33vw"
                    />
                </div>}

        </>
    )


}

export default React.memo(TierIcon)