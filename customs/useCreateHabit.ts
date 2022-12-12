import { useState } from 'react';

type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

const useCreateHabit = () => {
  const [habitName, setHabitName] = useState<string>('');
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

  const createHabit = async () => {
    // try {
    //   await fetch('../api/habits', {
    //     method: 'POST',
    //     body: JSON.stringify({ id: 1, content: habitName }),
    //   });
    // } catch (e) {
    //   console.log('error!!!', e);
    // }
  };

  return {
    habitName,
    checkedDay,
    handleCheckedDay,
    handleHabitName,
    createHabit,
  };
};

export default useCreateHabit;
