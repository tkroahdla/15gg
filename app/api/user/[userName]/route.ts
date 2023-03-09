import { ISummonerData } from "@/app/summoners/[search]/page";
import fetchURL from "@/lib/fetchURL";
import { NextResponse } from "next/server";

const BASE_URL_PROFILE_BYNAME =
  "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";

const BASE_URL_RANK_BYID =
  "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/";

async function getUserProfile(userName: string) {
  const res = fetchURL(BASE_URL_PROFILE_BYNAME, userName);
  return res;
}

async function getUserRank(userId: string) {
  const res = fetchURL(BASE_URL_RANK_BYID, userId);
  return res;
}

export async function GET(request: any, { params }: any) {
  const userName = params.userName;

  try {
    const profileData: ISummonerData = await getUserProfile(userName);
    if (profileData) {
      const rankData = await getUserRank(profileData.id);

      return NextResponse.json({
        ok: true,
        profileData,
        rankData,
      });
    }
  } catch (error) {
    return NextResponse.json({
      ok: false,
      error,
    });
  }

  // const { searchParams } = request.nextUrl;
  // const sort = searchParams.get("sort");
}
