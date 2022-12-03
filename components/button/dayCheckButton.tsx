import React from 'react';
import { onClickProps } from 'types/props';

type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
type Props = onClickProps & {
  checked: boolean;
  dayOfWeek: DayOfWeek;
};

const DayCheckButton = ({ checked, onClick, dayOfWeek }: Props) => {
  return (
    <button
      role="checkbox"
      className="flex flex-col items-center gap-1"
      onClick={onClick}
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
