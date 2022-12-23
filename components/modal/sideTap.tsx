import { useEffect, useRef } from 'react';

import Target from 'components/svgs/target.svg';
import BoxOpen from 'components/svgs/boxOpen.svg';
import ChartPie from 'components/svgs/chartPie.svg';
import SquareCheck from 'components/svgs/squareCheck.svg';
import User from 'components/svgs/user.svg';
import Key from 'components/svgs/key.svg';
import useModal from 'customs/useModal';

import Link from 'next/link';

import useOutsideClick from 'customs/useOutsideClick';

const SideTap = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { clicked } = useOutsideClick(modalRef);
  const { closeModal } = useModal();

  const closeSideTap = () => {
    closeModal({ element: <SideTap /> });
  };

  useEffect(() => {
    if (clicked) closeSideTap();
  }, [clicked]);

  return (
    <div
      ref={modalRef}
      className="flex h-full w-3/5 flex-col gap-10 rounded-tr-lg rounded-br-lg bg-white p-10"
    >
      <h1 className="text-3xl font-bold">디스위크</h1>
      <ul className="flex flex-col gap-4 text-xl">
        <Link href={`/`}>
          <li className="flex items-center gap-4" onClick={closeSideTap}>
            <Target width="25px" height="25px" fill="#808080" />
            <button>오늘의 습관</button>
          </li>
        </Link>
        <Link href={`/manage/habit`}>
          <li className="flex items-center gap-4" onClick={closeSideTap}>
            <BoxOpen width="25px" height="25px" fill="#808080" />
            <button>습관 관리</button>
          </li>
        </Link>
        <Link href={`/statistic`}>
          <li className="flex items-center gap-4" onClick={closeSideTap}>
            <ChartPie width="25px" height="25px" fill="#808080" />
            <button>습관 데이터</button>
          </li>
        </Link>
        <Link href={`/manage/review`}>
          <li className="flex items-center gap-4" onClick={closeSideTap}>
            <SquareCheck width="25px" height="25px" fill="#808080" />
            <button>회고 관리</button>
          </li>
        </Link>
        <Link href={`/user`}>
          <li className="flex items-center gap-4" onClick={closeSideTap}>
            <User width="25px" height="25px" fill="#808080" />
            <button>유저 정보</button>
          </li>
        </Link>
        <Link href={`/setting`}>
          <li className="flex items-center gap-4" onClick={closeSideTap}>
            <Key width="25px" height="25px" fill="#808080" />
            <button>설정</button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideTap;
