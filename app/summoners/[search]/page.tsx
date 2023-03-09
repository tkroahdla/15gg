"use client"

import useSWR from 'swr'
import React from "react"
import ProfileBox from './profileBox';
import MiniSearchBar from '@/app/miniSearchBar';

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
}

interface Props {
    params: {
        search: string
    }
}

function Search({ params: { search } }: Props) {

    // const [userInfo, setUserInfo] = React.useState();
    const fetcher = (url: string) => fetch(url).then(res => res.json())

    const decodedSearch = decodeURIComponent(search);

    const { data: summonerInfo } = useSWR<SummonerDataRes>(`/api/user/${decodedSearch}`, fetcher)

    React.useEffect(() => {
        if (summonerInfo && summonerInfo.ok) console.log(summonerInfo)
    }, [summonerInfo])

    return (
        <>
            <div className="mx-auto w-full max-w-4xl space-y-3 ">
                <div className='flex justify-end'>
                    <MiniSearchBar />
                </div>

                {summonerInfo?.ok &&
                    <ProfileBox
                        summonerInfo={summonerInfo?.profileData}
                        rankInfo={summonerInfo?.rankData} />
                }
            </div>
        </>
    )
}

export default React.memo(Search)