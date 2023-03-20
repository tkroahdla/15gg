"use client"
import Image from "next/image";
import React from "react"
import { ISummonerData } from "../page"

interface IItemIconProps {
    itemNumber: number;
}

function ItemIcon(props: IItemIconProps) {
    return (
        <>
            {props?.itemNumber ?
                <div className="flex relative w-8 h-8">
                    <Image
                        alt="profileIcon"
                        src={`/img/item/${props.itemNumber}.png`}
                        fill={true}
                        style={{ objectFit: "contain" }}
                        className="rounded-md"
                        draggable="false"
                        sizes="33vw"
                    />
                </div>
                : <div className="w-8 h-8 bg-slate-300 rounded-md" />
            }

        </>
    )


}

export default React.memo(ItemIcon)