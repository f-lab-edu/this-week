import { useState } from 'react';

type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

const useCreateHabit = () => {
  const [habitName, setHabitName] = useState<string>('');
  const [checkedDay, setCheckedDay] = useState<DayOfWeek[]>([
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
  ]);
  const handleCheckedDay = (dayOfWeek: DayOfWeek) => {
    if (checkedDay.includes(dayOfWeek)) {
      const newCheckedDay = checkedDay.filter((day) => day !== dayOfWeek);
      setCheckedDay([...newCheckedDay]);
    } else {
      setCheckedDay([...checkedDay, dayOfWeek]);
    }
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

export default useCreateHabit;
