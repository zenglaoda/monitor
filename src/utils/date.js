import dayjs from "dayjs";

/**
 * @description 获取时间查询参数
 * @param {Date[]} date
 * @returns {{sTime: number, eTime: number}}
*/
export function getQueryDate(date) {
  const format = 'YYYY-MM-DD HH:mm:ss';
  let [sTime='', eTime=''] = date;
  if (sTime) {
    sTime = dayjs(sTime).hour(0).minute(0).second(0).format(format);
  }
  if (eTime) {
    eTime = dayjs(eTime).hour(23).minute(59).second(59).format(format);
  }
  return {
    sTime,
    eTime
  }
}


export function formatViewDate(timestamp) {
  return dayjs(timestamp).format('MM-DD-YYYY')
}