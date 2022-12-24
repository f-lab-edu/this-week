type RepeatDow = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export const getDay = (): RepeatDow => {
  const day = new Date();
  const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  return week[day.getDay()] as RepeatDow;
};
