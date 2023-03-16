import fetchURL from "@/lib/fetchURL";
import { NextResponse } from "next/server";

const BASE_URL_MATCHDATA_BYMATCHID =
  "https://asia.api.riotgames.com/lol/match/v5/matches/";

// /KR_6397084702?api_key=RGAPI-7bcb64b8-b131-4c0e-bcae-58f64cf30f4f

async function getMatchData(matchId: string) {
  console.log(BASE_URL_MATCHDATA_BYMATCHID + matchId);
  const res = await fetchURL(BASE_URL_MATCHDATA_BYMATCHID, matchId);
  return res;
}

export async function GET(request: any, { params }: any) {
  const matchId = params.matchId;

  try {
    const matchData = await getMatchData(matchId);
    return NextResponse.json({
      ok: true,
      matchData,
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      error,
    });
  }
}
