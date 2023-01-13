import { useEffect, useRef } from 'react';

import Target from 'components/svgs/target.svg';
// import BoxOpen from 'components/svgs/boxOpen.svg';
// import ChartPie from 'components/svgs/chartPie.svg';
import SquareCheck from 'components/svgs/squareCheck.svg';
import User from 'components/svgs/user.svg';
import Key from 'components/svgs/key.svg';
import useModal from 'customs/useModal';

import Link from 'next/link';

import useOutsideClick from 'customs/useOutsideClick';

const SideTap = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, () => {
    closeModal({ element: <SideTap /> });
  });
  const { closeModal } = useModal();

  const closeSideTap = () => {
    closeModal({ element: <SideTap /> });
  };

  return (
    <div
      ref={modalRef}
      className="flex h-full w-3/5 flex-col gap-10 rounded-tr-lg rounded-br-lg bg-white py-10 px-8"
    >
      <h1 className="text-3xl font-bold">디스위크</h1>
      <ul className="flex flex-col gap-4 text-xl">
        <Link href={`/`}>
          <li className="flex items-center gap-4" onClick={closeSideTap}>
            <Target width="25px" height="25px" fill="#808080" />
            <button>디스위크</button>
          </li>
        </Link>
        {/* <Link href={`/habit`}>
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
        </Link> */}
        {/* <Link href={`/review`}>
          <li className="flex items-center gap-4" onClick={closeSideTap}>
            <SquareCheck width="25px" height="25px" fill="#808080" />
            <button>지난 회고</button>
          </li>
        </Link> */}
        <Link href={`/user`}>
          <li className="flex items-center gap-4" onClick={closeSideTap}>
            <User width="25px" height="25px" fill="#808080" />
            <button>마이 페이지</button>
          </li>
        </Link>
        <Link href={`/setting`}>
          <li className="flex items-center gap-4" onClick={closeSideTap}>
            <Key width="25px" height="25px" fill="#808080" />
            <button>개발자 소개</button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideTap;
