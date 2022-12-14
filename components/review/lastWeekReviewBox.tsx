import Folder from 'components/svgs/folder.svg';

import { useGetLastWeekReviewQuery } from 'queries/useReviewQuery';

const LastWeekReviewBox = () => {
  const { lastWeekReview, isExist } = useGetLastWeekReviewQuery();
  return (
    <div className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-pink p-2 text-white">
      {isExist && lastWeekReview ? (
        <ul>
          {lastWeekReview.map((review) => {
            const {
              attributes: { week, month, year },
              id,
            } = review;
            return (
              <li
                key={id}
                className="py-1 font-normal"
              >{`π ${year}λ ${month}μ ${week}μ£Όμ°¨`}</li>
            );
          })}
        </ul>
      ) : (
        <Folder width="50px" fill="#0000001A" />
      )}
    </div>
  );
};

export default LastWeekReviewBox;
