import { useEffect, useRef } from 'react';

import Portal from 'components/portal';
import Blur from 'components/modal/blur';
import Icon from 'components/icon/icon';

import useOutsideClick from 'customs/useOutsideClick';

const SideTap = (props: { handleClick(): void }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { clicked } = useOutsideClick(modalRef);

  useEffect(() => {
    if (clicked) props.handleClick();
  }, [clicked]);
  return (
    <Portal>
      <Blur>
        <div
          ref={modalRef}
          className="flex h-full w-3/5 flex-col gap-10 rounded-tr-lg rounded-br-lg bg-white p-10"
        >
          <h1 className="text-3xl font-bold">디스위크</h1>
          <ul className="flex flex-col gap-4 text-xl">
            <li className="flex items-center gap-3">
              <Icon icon="faBullseye"></Icon>
              <button>오늘의 습관</button>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="faBoxOpen"></Icon>
              <button>습관 관리</button>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="faChartPie"></Icon>
              <button>습관 데이터</button>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="faSquareCheck"></Icon>
              <button>회고 관리</button>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="faUser"></Icon>
              <button>유저 정보</button>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="faKey"></Icon>
              <button>오늘의 습관</button>
            </li>
          </ul>
        </div>
      </Blur>
    </Portal>
  );
};

export default SideTap;
