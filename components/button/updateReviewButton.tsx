import Link from 'next/link';

import { getWeek } from 'lib/date';

const UpdateReviewButton = () => {
  return (
    <Link href={'/review/update'}>
      <button className="w-full rounded-lg bg-main-blue px-5 py-3 text-lg font-semibold text-white">
        {getWeek}주차 회고 수정하기 ✏️
      </button>
    </Link>
  );
};

export default UpdateReviewButton;
