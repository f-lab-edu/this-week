import SideTap from 'components/modal/sideTap';
import Bars from 'components/svgs/bars.svg';
import User from 'components/svgs/user.svg';
import Target from 'components/svgs/target.svg';
import BoxOpen from 'components/svgs/boxOpen.svg';
import ChartPie from 'components/svgs/chartPie.svg';
import SquareCheck from 'components/svgs/squareCheck.svg';

import Link from 'next/link';

import { useState } from 'react';

const Navigator = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 flex h-12 items-center justify-between border-b border-main-border bg-white px-5">
      <div className="flex gap-6">
        <button className="lg:hidden" onClick={() => setModal((prev) => !prev)}>
          <Bars width="25px" height="25px" fill="#000000" />
        </button>
        <Link className="hidden lg:block" href={`/`}>
          <Target width="25px" height="25px" fill="#000000" />
        </Link>
        <Link className="hidden lg:block" href={`/manage/habit`}>
          <BoxOpen width="25px" height="25px" fill="#000000" />
        </Link>
        <Link className="hidden lg:block" href={`/statistic`}>
          <ChartPie width="25px" height="25px" fill="#000000" />
        </Link>
        <Link className="hidden lg:block" href={`/manage/review`}>
          <SquareCheck width="25px" height="25px" fill="#000000" />
        </Link>
      </div>
      <div className="lg:">
        <User width="25px" height="25px" fill="#000000" />
      </div>
      {modal && (
        <SideTap handleClick={() => setModal((prev) => !prev)}></SideTap>
      )}
    </nav>
  );
};

export default Navigator;
