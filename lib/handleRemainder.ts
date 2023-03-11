export default function handleRemainder(number: number) {
  console.log(number);
  if (number % 1 == 0) return parseInt(String(number));
  else return number;
}
