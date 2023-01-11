import React from 'react';

import dayjs from 'lib/dayjs';
import { useRouter } from 'next/router';

import useModal from 'customs/useModal';
import ReviewCheckModal from 'components/modal/reviewCheckModal';

const WriteReviewButton = () => {
  const router = useRouter();
  const { openModal } = useModal();
  const thisWeek = dayjs().week();
  const thisDay = dayjs().day();

  const goToReviewPage = () => {
    if (thisDay !== 0) {
      return openModal({ element: <ReviewCheckModal /> });
    }
    return router.push('/manage/review');
  };
  return (
    <button
      onClick={goToReviewPage}
      className="font-semiboltext-white w-full rounded-lg bg-main-blue px-5 py-3 text-lg font-semibold text-white"
    >
      {thisWeek}주차 회고 쓰기 ✏️
    </button>
  );
};

export default WriteReviewButton;
