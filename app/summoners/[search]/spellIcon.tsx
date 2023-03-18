"use client"
import { SPELLTYPE } from "@/app/types/spellType";
import Image from "next/image";
import React from "react"


interface ISpellIconProps {
    spellIconId: number;
}

function SpellIcon(props: ISpellIconProps) {
    return (
        <div className="w-6 h-6 relative ">

            <Image
                alt="profileIcon"
                src={`https://ddragon.leagueoflegends.com/cdn/${process.env.NEXT_PUBLIC_LOL_VERSION}/img/spell/${SPELLTYPE[props.spellIconId]}.png`}
                fill={true}
                style={{ objectFit: "contain" }}
                className="rounded-lg"
                draggable="false"
                sizes="33vw"
                priority
            />
        </div>
    )


}

export default React.memo(SpellIcon)