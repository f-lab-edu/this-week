import { useState } from 'react';

type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
type Props = { content: string };

const useUpdateHabit = ({ content }: Props) => {
  const [habitName, setHabitName] = useState<string>(content);
  const [checkedDay, setCheckedDay] = useState({
    mon: true,
    tue: true,
    wed: true,
    thu: true,
    fri: true,
    sat: false,
    sun: false,
  });
  const handleCheckedDay = (dayOfWeek: DayOfWeek) => {
    setCheckedDay({ ...checkedDay, [dayOfWeek]: !checkedDay[dayOfWeek] });
  };
  const handleHabitName = (value: string) => {
    setHabitName(value);
  };

  return {
    habitName,
    checkedDay,
    handleCheckedDay,
    handleHabitName,
  };
};

export default useUpdateHabit;
