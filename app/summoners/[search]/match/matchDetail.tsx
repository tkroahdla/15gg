"use client"
import divideTeam from "@/lib/divideTeam";
import getSummoner from "@/lib/getSummoner";
import { cls } from "@/lib/utils";
import React from "react";
import useSWR from 'swr';
import ChampionIcon from "../championIcon";
import ParticipantBox from "../participant/participantBox";
import MatchInfo from "./matchInfo";


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
    win: boolean
}

interface ITeams {
    bans: IBans[]
    objectives: IObjectives[]
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

    return (
        <>
            {matchData?.ok &&
                <div
                    className={cls("flex justify-center items-center rounded-md text-sm p-2", myInfo?.win ? "bg-blue-50" : "bg-red-100")}>
                    {myInfo && <MatchInfo matchInfo={matchData?.matchData?.info} myInfo={myInfo} />}
                    <div className="flex justify-center grow-[1]">
                        <div className="w-12 h-12 relative">
                            <ChampionIcon championName={myInfo?.championName!} />
                        </div>
                    </div>
                    <div className="flex space-x-5 grow-0">
                        <ParticipantBox team={team!} />
                    </div>
                </div>
            }
        </>
    )
}

export default React.memo(MatchDetail)