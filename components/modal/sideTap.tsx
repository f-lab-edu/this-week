import { useEffect, useRef } from 'react';

import Portal from 'components/portal';
import Blur from 'components/modal/blur';
import Icon from 'components/icon/icon';

import Link from 'next/link';

import useOutsideClick from 'customs/useOutsideClick';

import { OnClickProps } from 'types/props';

const SideTap = ({ onClick }: OnClickProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { clicked } = useOutsideClick(modalRef);

  useEffect(() => {
    if (clicked) onClick();
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
            <Link href={`/`}>
              <li className="flex items-center gap-4" onClick={() => onClick()}>
                <Icon icon="faBullseye"></Icon>
                <button>오늘의 습관</button>
              </li>
            </Link>
            <Link href={`/manage/habit`}>
              <li className="flex items-center gap-4" onClick={() => onClick()}>
                <Icon icon="faBoxOpen"></Icon>
                <button>습관 관리</button>
              </li>
            </Link>
            <Link href={`/statistic`}>
              <li className="flex items-center gap-4" onClick={() => onClick()}>
                <Icon icon="faChartPie"></Icon>
                <button>습관 데이터</button>
              </li>
            </Link>
            <Link href={`/manage/review`}>
              <li className="flex items-center gap-4" onClick={() => onClick()}>
                <Icon icon="faSquareCheck"></Icon>
                <button>회고 관리</button>
              </li>
            </Link>
            <Link href={`/user`}>
              <li className="flex items-center gap-4" onClick={() => onClick()}>
                <Icon icon="faUser"></Icon>
                <button>유저 정보</button>
              </li>
            </Link>
            <Link href={`/setting`}>
              <li className="flex items-center gap-4" onClick={() => onClick()}>
                <Icon icon="faKey"></Icon>
                <button>설정</button>
              </li>
            </Link>
          </ul>
        </div>
      </Blur>
    </Portal>
  );
};

export default SideTap;
