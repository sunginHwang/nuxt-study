export const secondsToTime = (seconds) => {
  const hh = Math.floor(seconds / 3600);
  const mm = Math.floor((seconds % 3600) / 60);
  const ss = seconds % 60;
  return [
    hh,
    mm > 9 ? mm : (hh ? '0' + mm : mm || '0'),
    ss > 9 ? ss : '0' + ss,
  ].filter(a => a).join(':');
};


export const parseKoreanDateTime = (dateTime) => {
  const today = new Date(dateTime);
  const year = today.getFullYear();
  const month = today.getMonth() < 11 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const hour = today.getHours();
  const isAM = hour < 12;


  return `${year}. ${month}. ${day} ${isAM ? '오전' : '오후'} ${hour}:${today.getMinutes()}`;
};
