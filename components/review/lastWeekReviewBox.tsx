import Folder from 'components/svgs/folderOpen.svg';
import Hippo from 'components/svgs/hippo.svg';

import { useGetLastWeekReviewQuery } from 'queries/useReviewQuery';

const LastWeekReviewBox = () => {
  const { lastWeekReview, isExist } = useGetLastWeekReviewQuery();
  return (
    <div className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-pink p-2 text-white">
      {isExist && lastWeekReview ? (
        <ul>
          {lastWeekReview.map((review) => (
            <li key={review.id} className="py-1 font-normal">
              <Hippo width="50px" fill="#0000001A" />
            </li>
          ))}
        </ul>
      ) : (
        <Folder width="50px" fill="#0000001A" />
      )}
    </div>
  );
};

export default LastWeekReviewBox;
