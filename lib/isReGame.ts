export default function isReGame(gameDuration: number): boolean {
  if (gameDuration < 60 * 3.5) {
    return true;
  }
  return false;
}
