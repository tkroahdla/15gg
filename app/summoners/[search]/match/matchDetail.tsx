"use client"
import divideTeam from "@/lib/divideTeam";
import getKillParticipation from "@/lib/getKillParticipation";
import getMyTeam from "@/lib/getMyTeam";
import getSummoner from "@/lib/getSummoner";
import { cls } from "@/lib/utils";
import React from "react";
import useSWR from 'swr';

import ParticipantBox from "../participant/participantBox";
import MatchInfo from "./matchInfo";
import MatchMyChampBox from "./matchMyChamp"

interface MatchDetailProps {
    matchId: string
    summonerName: string
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
            console.log("matchData", matchData)
            const participants = matchData?.matchData?.info?.participants;

            let devidedTeam = divideTeam(participants)
            setTeam(devidedTeam)

            let summoner = getSummoner(participants, props.summonerName)
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
                    className={cls("flex justify-center items-center rounded-md text-sm p-2", myInfo?.win ? "bg-blue-50" : "bg-red-100")}>
                    {myInfo && <>
                        <MatchInfo matchInfo={matchData?.matchData?.info} myInfo={myInfo} />
                        {items &&
                            <>
                                <div className="flex justify-center grow-[1] ">
                                    <MatchMyChampBox myInfo={myInfo} items={items} ></MatchMyChampBox>
                                </div>
                                {myTeam &&
                                    <div className="flex-col justify-start grow-[1] ml-5 text-xs font-semibold space-y-2">
                                        <div className="text-red-500">킬관여 {getKillParticipation(myTeam.objectives.champion.kills, myInfo.kills, myInfo.assists)}% </div>
                                        <div>제어 와드  {myInfo?.wardsPlaced}</div>
                                        <div>CS {myInfo?.totalMinionsKilled}</div>
                                    </div>
                                }
                            </>
                        }
                    </>
                    }

                    <div className="flex space-x-5 grow-0">
                        <ParticipantBox team={team!} />
                    </div>
                </div>
            }
        </>
    )
}

export default React.memo(MatchDetail)