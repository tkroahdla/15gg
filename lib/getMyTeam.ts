import { ITeams } from "@/app/summoners/[search]/match/matchDetail";

export default function getMyTeam(win: boolean, teams: ITeams[]) {
  if (win == teams[0].win) {
    return teams[0];
  }
  return teams[1];
}
