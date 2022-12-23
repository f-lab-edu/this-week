import { useState } from 'react';

const useHabitCardClick = () => {
  const [checkedBox, setCheckedBox] = useState(false);
  const [checkedDots, setCheckedDots] = useState(false);
  const onClickCheckbox = () => setCheckedBox((prev) => !prev);
  const onClickDots = () => setCheckedDots((prev) => !prev);
  return { checkedBox, checkedDots, onClickCheckbox, onClickDots };
};

export default useHabitCardClick;
