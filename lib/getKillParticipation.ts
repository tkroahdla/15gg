export default function getKillParticipation(
  teamKills: number,
  kill: number,
  assist: number
) {
  let sum = kill + assist;
  if (sum == 0) return 0;
  let P_kill = ((sum / teamKills) * 100).toFixed(0);

  return P_kill;
}
