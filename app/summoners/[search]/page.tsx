"use client"

import useSWR from 'swr'
import React from "react"
import ProfileBox from './profile/profileBox';
import MiniSearchBar from '@/app/miniSearchBar';
import TierBox from './tier/tierBox';
import NotFound from './notFound';
import MatchBox from './match/matchBox';
import Head from 'next/head';

export interface ISummonerData {
    accountId: string,
    id: string,
    name: string,
    profileIconId: number,
    puuid: string,
    revistionData: number,
    summonerLevel: number
}

export interface IRankData {
    queueType?: "RANKED_SOLO_5x5" | "RANKED_FLEX_SR" | string,
    rank?: string,
    tier?: string,
    leagueId?: string,
    leaguePoints?: number,
    losses?: number,
    wins?: number
    summonerId?: string,
    summonerName?: string
}

interface SummonerDataRes {
    ok: boolean,
    profileData: ISummonerData,
    rankData: IRankData[],
    matchIds: string[]
}

interface Props {
    params: {
        search: string
    }
}

function Search({ params: { search } }: Props) {
    const decodedSearch = decodeURIComponent(search);

    const { data: summonerInfo, isValidating } = useSWR<SummonerDataRes>(`/api/user/${decodedSearch}`)

    React.useEffect(() => {
        if (summonerInfo && summonerInfo.ok) console.log(summonerInfo)
    }, [summonerInfo])

    return (
        <>
            <div className="mx-auto w-auto max-w-4xl space-y-3 p-5">
                <div className='flex justify-end'>
                    <MiniSearchBar />
                </div>
                {!isValidating &&
                    <>
                        <ProfileBox
                            summonerInfo={summonerInfo?.profileData}
                            rankInfo={summonerInfo?.rankData} />
                        <TierBox rankInfo={summonerInfo!.rankData} />

                        {!summonerInfo?.ok &&
                            <NotFound summonerName={search} />
                        }

                        <MatchBox matchIds={summonerInfo!.matchIds} summonerId={summonerInfo!.profileData?.id} />
                    </>
                }
            </div>
        </>
    )
}

export default React.memo(Search)