import dayjs from 'dayjs'

/**
 * 
 * @param {*传入日期} date
 * @returns xx月xx日
 */
export const formatDate = (time, type = 'MM月DD日') => {
  return dayjs(time).format(type)
}

/**
 * 
 * @param {*日期1} time1 
 * @param {*日期2} time2 
 * @returns  相差天数
 */
export const getDateInterval = (time1, time2) => {
  return dayjs(time2).diff(time1, 'day');
}
