"use client"
import { RUNETYPE } from "@/app/types/runeType";
import { SPELLTYPE } from "@/app/types/spellType";
import Image from "next/image";
import React from "react"


interface IRuneIconProps {
    runeIconId: number;

}

function RuneIcon(props: IRuneIconProps) {
    // console.log("props", props)
    // console.log(RUNETYPE[props.runeIconId].icon)


    return (
        <div className="w-6 h-6 relative ">
            <Image
                alt="profileIcon"
                src={`/img/` + RUNETYPE[props.runeIconId].icon}
                fill={true}
                style={{ objectFit: "contain" }}
                className="rounded-lg bg-[#363636b2]"
                draggable="false"
                sizes="33vw"
                priority
            />
        </div>
    )


}

export default React.memo(RuneIcon)