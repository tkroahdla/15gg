export default async function fetchURL(url: string, param: string | number) {
  const res = await (
    await fetch(url + param + "?api_key=" + process.env.NEXT_PUBLIC_API_KEY)
  ).json();

  return res;
}
