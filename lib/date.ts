import dayjs from 'lib/dayjs';

type RepeatDow = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export const getDay = (): RepeatDow => {
  const day = new Date();
  const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  return week[day.getDay()] as RepeatDow;
};

export const getWeek = dayjs().week();
export const getDayNumber = dayjs().day();
export const getLastWeek = dayjs().add(-1, 'week').week();
export const getYearOfLastWeek = dayjs().add(-1, 'week').year();
export const getLastMonth = dayjs().add(-1, 'month').month() + 1;
export const getYearOfLastMonth = dayjs().add(-1, 'month').year();
