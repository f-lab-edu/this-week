import Folder from 'components/svgs/folderOpen.svg';
import Rocket from 'components/svgs/rocket.svg';

import { useGetLastMonthReviewQuery } from 'queries/useReviewQuery';

const LastMonthReviewBox = () => {
  const { lastMonthReviews, isExist } = useGetLastMonthReviewQuery();
  return (
    <div className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-red p-2 text-white">
      {lastMonthReviews && isExist ? (
        <ul>
          {lastMonthReviews.map((review) => (
            <li key={review.id} className="py-1 font-normal">
              <Rocket width="50px" fill="#0000001A" />
            </li>
          ))}
        </ul>
      ) : (
        <Folder width="50px" fill="#0000001A" />
      )}
    </div>
  );
};

export default LastMonthReviewBox;
