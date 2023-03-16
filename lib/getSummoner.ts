import { IParticipants } from "@/app/summoners/[search]/match/matchDetail";

export default function getSummoner(
  participants: IParticipants[],
  summonerName: string
) {
  for (let i = 0; i < participants.length; i++) {
    if (participants[i].summonerName === summonerName) {
      return participants[i];
    }
  }
}
