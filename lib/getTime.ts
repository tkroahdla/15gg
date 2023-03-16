export default function getTime(timeStamp: number) {
  var cur = new Date();
  var date = new Date(timeStamp);

  let difference = (cur.getTime() - date.getTime()) / 1000;

  if (difference < 60) return Math.floor(difference) + "초 전";
  else if (difference < 60 * 60) return Math.floor(difference / 60) + "분 전";
  else if (difference < 60 * 60 * 24)
    return Math.floor(difference / (60 * 60)) + "시간 전";
  else if (difference < 60 * 60 * 24 * 30)
    return Math.floor(difference / (60 * 60 * 24)) + "일 전";
  else if (difference < 60 * 60 * 24 * 30 * 12)
    return Math.floor(difference / (60 * 60 * 24 * 30)) + "달 전";
}
