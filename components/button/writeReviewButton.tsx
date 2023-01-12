import React from 'react';

import { getDayNumber, getWeek } from 'lib/date';
import { useRouter } from 'next/router';

import useModal from 'customs/useModal';
import ReviewCheckModal from 'components/modal/reviewCheckModal';

const WriteReviewButton = () => {
  const router = useRouter();
  const { openModal } = useModal();

  const goToReviewPage = () => {
    if (getDayNumber !== 0) {
      return openModal({ element: <ReviewCheckModal /> });
    }
    return router.push('/manage/review');
  };
  return (
    <button
      onClick={goToReviewPage}
      className="font-semiboltext-white w-full rounded-lg bg-main-blue px-5 py-3 text-lg font-semibold text-white"
    >
      {getWeek}주차 회고 쓰기 ✏️
    </button>
  );
};

export default WriteReviewButton;
