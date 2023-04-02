"use client"
import Image from "next/image";
import React from "react"


interface IProfileIconProps {
    profileIconId: number;
    profileLevel: number;
}

function ProfileIcon(props: IProfileIconProps) {
    return (
        <div className="w-24 h-24 relative">
            <Image
                alt="profileIcon"
                src={`https://ddragon.leagueoflegends.com/cdn/${process.env.NEXT_PUBLIC_LOL_VERSION}/img/profileicon/${props.profileIconId}.png`}
                // src={`/img/profileicon/${props.profileIconId}.png`}
                fill={true}
                style={{ objectFit: "contain" }}
                className="rounded-2xl"
                draggable="false"
                sizes="33vw"
                priority
            />
            <div className="absolute w-full -bottom-3 flex justify-center ">
                <span className="w-10 text-center bg-white rounded-xl border-[#dfd6cf] border-2">{props.profileLevel}</span>
            </div>
        </div>
    )


}

export default React.memo(ProfileIcon)