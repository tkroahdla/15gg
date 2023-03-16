import {
  IDevidedTeam,
  IParticipants,
} from "@/app/summoners/[search]/match/matchDetail";

export default function divideTeam(
  participants: IParticipants[]
): IDevidedTeam {
  const arr = [];

  for (let i = 0; i < participants.length; i += 5) {
    arr.push(participants.slice(i, i + 5));
  }

  return { team1: arr[0], team2: arr[1] };
}
