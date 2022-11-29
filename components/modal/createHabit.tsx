import React from 'react';
import { useState, useRef, useEffect } from 'react';

import Portal from 'components/portal';
import Blur from 'components/modal/blur';
import BottomFixedContainer from 'components/container/bottomFixedContainer';
import useOutsideClick from 'customs/useOutsideClick';
import CreateButton from 'components/button/createButton';
import DayCheckButton from 'components/button/dayCheckButton';

import { HandleClickProps } from 'types/props';

type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

const CreateHabit = ({ handleClick }: HandleClickProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { clicked } = useOutsideClick(modalRef);
  const [habitName, setHabitName] = useState<string>('');
  const [dayChecked, setDayChecked] = useState({
    mon: true,
    tue: true,
    wed: true,
    thu: true,
    fri: true,
    sat: false,
    sun: false,
  });

  useEffect(() => {
    if (clicked) handleClick();
  }, [clicked]);

  const handleDayCheck = (dayOfWeek: DayOfWeek) => {
    setDayChecked({ ...dayChecked, [dayOfWeek]: !dayChecked[dayOfWeek] });
  };

  return (
    <Portal>
      <Blur>
        <BottomFixedContainer>
          <div ref={modalRef} className="flex w-full flex-col gap-8 py-6">
            <div>
              <p className="pb-2 text-xl">습관 이름</p>
              <div className="border-b">
                <input
                  value={habitName}
                  onChange={(event) => setHabitName(event.target.value)}
                  placeholder="습관 이름을 입력하세요."
                  className="h-10 w-full text-lg outline-none"
                ></input>
              </div>
            </div>
            <div className="pb-4">
              <p className="pb-2 text-xl">반복 요일</p>
              <div className="flex justify-between">
                <DayCheckButton
                  dayOfWeek="sun"
                  checked={dayChecked.sun}
                  handleClick={() => handleDayCheck('sun')}
                ></DayCheckButton>
                <DayCheckButton
                  dayOfWeek="mon"
                  checked={dayChecked.mon}
                  handleClick={() => handleDayCheck('mon')}
                ></DayCheckButton>
                <DayCheckButton
                  dayOfWeek="tue"
                  checked={dayChecked.tue}
                  handleClick={() => handleDayCheck('tue')}
                ></DayCheckButton>
                <DayCheckButton
                  dayOfWeek="wed"
                  checked={dayChecked.wed}
                  handleClick={() => handleDayCheck('wed')}
                ></DayCheckButton>
                <DayCheckButton
                  dayOfWeek="thu"
                  checked={dayChecked.thu}
                  handleClick={() => handleDayCheck('thu')}
                ></DayCheckButton>
                <DayCheckButton
                  dayOfWeek="fri"
                  checked={dayChecked.fri}
                  handleClick={() => handleDayCheck('fri')}
                ></DayCheckButton>
                <DayCheckButton
                  dayOfWeek="sat"
                  checked={dayChecked.sat}
                  handleClick={() => handleDayCheck('sat')}
                ></DayCheckButton>
              </div>
            </div>
            <CreateButton
              text="습관 추가하기"
              handleClick={() => {
                console.log('create habit!');
                handleClick();
              }}
            />
          </div>
        </BottomFixedContainer>
      </Blur>
    </Portal>
  );
};

export default CreateHabit;
