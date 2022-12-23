import SideTap from 'components/modal/sideTap';
import Bars from 'components/svgs/bars.svg';
import User from 'components/svgs/user.svg';
import useModal from 'customs/useModal';
import Modal from 'components/modal/modal';

import Link from 'next/link';

const Navigator = () => {
  const { openModal } = useModal();

  return (
    <nav className="fixed top-0 left-0 right-0 flex h-12 items-center justify-between border-b border-main-border bg-white px-5">
      <div className="flex items-center gap-6">
        <button
          className="lg:hidden"
          onClick={() =>
            openModal({
              element: <SideTap />,
            })
          }
        >
          <Bars width="25px" height="25px" fill="#000000" />
        </button>
        <Link className="hidden lg:block" href={`/`}>
          <p className="pr-4 text-xl font-bold">디스위크</p>
        </Link>
        <Link className="hidden lg:block" href={`/manage/habit`}>
          <p>습관관리</p>
        </Link>
        <Link className="hidden lg:block" href={`/statistic`}>
          <p>습관데이터</p>
        </Link>
        <Link className="hidden lg:block" href={`/manage/review`}>
          <p>회고관리</p>
        </Link>
      </div>
      <div className="lg:">
        <User width="25px" height="25px" fill="#000000" />
      </div>
      <Modal />
    </nav>
  );
};

export default Navigator;
