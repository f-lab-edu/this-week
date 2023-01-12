import {
  getWeek,
  getStartDateOfThisWeek,
  getEndDateOfThisWeek,
} from 'lib/date';

const WeekNumber = () => {
  return (
    <p className="text-xl text-sub-text">{`${getWeek}주차, ${getStartDateOfThisWeek.year()}.${(
      getStartDateOfThisWeek.month() + 1
    )
      .toString()
      .padStart(2, '0')}.${getStartDateOfThisWeek
      .date()
      .toString()
      .padStart(2, '0')} ~ ${getEndDateOfThisWeek.year()}.${(
      getEndDateOfThisWeek.month() + 1
    )
      .toString()
      .padStart(2, '0')}.${getEndDateOfThisWeek
      .date()
      .toString()
      .padStart(2, '0')}`}</p>
  );
};

export default WeekNumber;
