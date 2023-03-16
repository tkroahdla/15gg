import { IRankData } from "@/app/summoners/[search]/page";

export default function parseRankAndTier(rankInfo: IRankData[]): {
  rankData: IRankData[];
} {
  let rankData: IRankData[] = [{ tier: "UNRANKED" }, { tier: "UNRANKED" }];
  rankInfo.forEach((rankInfo) => {
    if (
      rankInfo?.queueType === "RANKED_SOLO_5x5" ||
      rankInfo?.queueType === "RANKED_FLEX_SR"
    ) {
      let Type = rankInfo?.queueType;
      if (Type === "RANKED_SOLO_5x5") rankData[0] = rankInfo;
      if (Type === "RANKED_FLEX_SR") rankData[1] = rankInfo;
    }
  });

  return { rankData };
}
