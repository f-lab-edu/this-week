import { useState } from 'react';

const useHabitCardClick = () => {
  const [checked, setChecked] = useState(false);
  const method = {
    onClick: () => setChecked((prev) => !prev),
  };
  return { checked, method };
};

export default useHabitCardClick;
