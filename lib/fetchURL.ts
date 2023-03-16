export default async function fetchURL(
  url: string,
  param: string | number,
  plusUrl?: string
) {
  if (!!!plusUrl) plusUrl = "";
  const res = await (
    await fetch(url + param + plusUrl, {
      headers: {
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Riot-Token": process.env.NEXT_PUBLIC_API_KEY!,
        Origin: "https://developer.riotgames.com",
      },
    })
  ).json();

  return res;
}
