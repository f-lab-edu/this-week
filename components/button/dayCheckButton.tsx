import React from 'react';
import { HandleClickProps } from 'types/props';

type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
type Props = HandleClickProps & {
  checked: boolean;
  dayOfWeek: DayOfWeek;
};

const DayCheckButton = ({ checked, handleClick, dayOfWeek }: Props) => {
  return (
    <button
      role="checkbox"
      className="flex flex-col items-center gap-1"
      onClick={handleClick}
    >
      <p className="text-sm text-sub-text">{dayOfWeek[0].toUpperCase()}</p>
      <div
        className={`h-8 w-8 rounded-full ${
          checked ? 'bg-black' : 'bg-main-border'
        }`}
      ></div>
    </button>
  );
};

export default DayCheckButton;
