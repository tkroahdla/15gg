export default function handleRemainder(number: number) {
  if (number % 1 == 0) return parseInt(String(number));
  else return number;
}
