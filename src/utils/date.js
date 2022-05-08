import dayjs from "dayjs";

/**
 * @description 获取时间查询参数
 * @param {Date[]} date
 * @returns {{sTime: number, eTime: number}}
*/
export function getQueryDate(date) {
  let [sTime='', eTime=''] = date;
  sTime && (sTime = sTime.getTime());
  eTime && (eTime = eTime.getTime());
  return {
    sTime,
    eTime
  }
}


export function formatViewDate(timestamp) {
  return dayjs(timestamp).format('MM-DD-YYYY')
}