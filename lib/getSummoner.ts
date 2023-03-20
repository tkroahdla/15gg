import { IParticipants } from "@/app/summoners/[search]/match/matchDetail";

export default function getSummoner(
  participants: IParticipants[],
  summonerId: string
) {
  for (let i = 0; i < participants.length; i++) {
    if (participants[i].summonerId === summonerId) {
      return participants[i];
    }
  }
}
