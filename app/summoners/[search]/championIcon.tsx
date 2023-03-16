"use client"
import Image from "next/image";
import React from "react"
import { ISummonerData } from "./page"

interface IChampionIconProps {
    championName: string;
}

function ChampionIcon(props: IChampionIconProps) {
    return (
        <>
            {props?.championName &&
                <Image
                    alt="profileIcon"
                    src={`https://ddragon.leagueoflegends.com/cdn/${process.env.NEXT_PUBLIC_LOL_VERSION}/img/champion/${props.championName}.png`}
                    fill={true}
                    style={{ objectFit: "contain" }}
                    className="rounded-md"
                    draggable="false"
                    sizes="33vw"
                />}
        </>
    )


}

export default React.memo(ChampionIcon)