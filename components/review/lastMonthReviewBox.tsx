import Folder from 'components/svgs/folder.svg';

import { useGetLastMonthReviewQuery } from 'queries/useReviewQuery';

const LastMonthReviewBox = () => {
  const { lastMonthReviews, isExist } = useGetLastMonthReviewQuery();
  return (
    <div className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-red p-2 text-white">
      {lastMonthReviews && isExist ? (
        <ul>
          {lastMonthReviews.map((review) => {
            const {
              attributes: { week, month, year },
              id,
            } = review;
            return (
              <li
                key={id}
                className="py-1 font-normal"
              >{`📁 ${year}년 ${month}월 ${week}주차`}</li>
            );
          })}
        </ul>
      ) : (
        <Folder width="50px" fill="#0000001A" />
      )}
    </div>
  );
};

export default LastMonthReviewBox;
