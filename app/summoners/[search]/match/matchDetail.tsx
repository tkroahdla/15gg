"use client"
import divideTeam from "@/lib/divideTeam";
import getKillParticipation from "@/lib/getKillParticipation";
import getMyTeam from "@/lib/getMyTeam";
import getSummoner from "@/lib/getSummoner";
import { cls } from "@/lib/utils";
import React from "react";
import useSWR from 'swr';
import EtcBox from "../etcBox";

import ParticipantBox from "../participant/participantBox";
import MatchInfo from "./matchInfo";
import MatchMyChampBox from "./matchMyChamp"

interface MatchDetailProps {
    matchId: string
    summonerId: string
}

interface IMatchData {
    matchData: {
        info: IMatchInfo
    }
    ok: boolean
}

export interface IMatchInfo {
    gameDuration: number,
    gameEndTimestamp: number,
    gameMode: string,
    participants: IParticipants[],
    teams: ITeams[]
    queueId: number
}

export interface IParticipants {
    summonerId: string,
    kills: number,
    deaths: number,
    assists: number,
    champLevel: number,
    championId: number,
    championName: string,
    totalDamageDealtToChampions: number,
    wardsKilled: number,
    wardsPlaced: number
    summonerName: string,
    summonerLevel: string,
    visionWardsBoughtInGame: number,
    totalMinionsKilled: number,
    summoner1Id: number,
    summoner2Id: number,
    win: boolean,
    item0: number,
    item1: number,
    item2: number,
    item3: number,
    item4: number,
    item5: number,
    item6: number,
    perks: IPerks
}

interface IPerks {
    styles: IPerks_Style[]
}

interface IPerks_Style {
    description: string,
    selections: IPerk[]
}

interface IPerk {
    perk: number,
    var1: number
    var2: number
    var3: number
}

export interface ITeams {
    bans: IBans[]
    objectives: IObjectives
    win: boolean
}

interface IBans {
    championId: number,
}

interface IObjectives {
    champion: {
        kills: number
    }
}

export interface IDevidedTeam {
    team1: IParticipants[],
    team2: IParticipants[]
}

function MatchDetail(props: MatchDetailProps) {
    const { data: matchData, isValidating } = useSWR<IMatchData>(`/api/match/${props.matchId}`)
    const [team, setTeam] = React.useState<IDevidedTeam>()
    const [myInfo, setMyInfo] = React.useState<IParticipants>()
    const [myTeam, setMyteam] = React.useState<ITeams>()
    const [items, setItems] = React.useState<number[]>()

    React.useEffect(() => {
        if (matchData && matchData.ok) {
            // console.log("matchData", matchData)
            const participants = matchData?.matchData?.info?.participants;

            let devidedTeam = divideTeam(participants)
            setTeam(devidedTeam)

            let summoner = getSummoner(participants, props.summonerId)
            setMyInfo(summoner)
        }
    }, [matchData])

    React.useEffect(() => {
        if (matchData && myInfo) {
            setItems([myInfo?.item0, myInfo?.item1, myInfo?.item2, myInfo?.item3, myInfo?.item4, myInfo?.item5, myInfo?.item6])

            let myTeam = getMyTeam(myInfo.win, matchData.matchData.info.teams)
            setMyteam(myTeam)
        }
    }, [myInfo])

    return (
        <>
            {matchData?.ok &&
                <div
                    className={cls("flex justify-center items-center rounded-md text-sm p-2 ", myInfo?.win ? "bg-blue-50" : "bg-red-100",
                        " phone35:flex-col",
                        " sm:flex-row",
                    )}>

                    <div className={cls("flex justify-center grow-[1] items-center sm:flex-row",
                        "phone35:flex-col phone35:w-[63] phone35:mb-3",
                        "sm:justify-around ",
                    )}>
                        <MatchInfo matchInfo={matchData?.matchData?.info} myInfo={myInfo!} />
                        <MatchMyChampBox myInfo={myInfo!} items={items!} ></MatchMyChampBox>
                    </div>

                    <div className="flex">
                        <div className={cls("phone35:hidden", "phone39:hidden", "phone41:hidden", "sm:hidden", "md:block")}>
                            <EtcBox myInfo={myInfo} myTeam={myTeam} ></EtcBox>
                        </div>

                        <div className={cls("flex space-x-5 grow-0",
                            "phone35:space-x-8 phone35:justify-start",
                        )}>
                            <ParticipantBox team={team!} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default React.memo(MatchDetail)