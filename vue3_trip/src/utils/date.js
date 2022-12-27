import dayjs from 'dayjs'

/**
 * 
 * @param {*传入日期} date
 * @returns xx月xx日
 */
export const formatDate = (time) => {
  return dayjs(time).format('MM月DD日')
}

/**
 * 
 * @param {*日期1} time1 
 * @param {*日期2} time2 
 * @returns  相差天数
 */
export const getDateInterval = (time1, time2) => {
  return dayjs(time1).diff(time2, 'day');
}


/**
 * 
 * @param {日期} time 
 * @param {加上的天数} value 
 * @returns xx月xx日
 */
export const formatDateAdd = (time, value) => {
  return dayjs(time).add(value, 'day').format('MM月DD日')
}
