import Image from 'next/image';

import Folder from 'components/svgs/folderOpen.svg';

import { useGetLastWeekReviewQuery } from 'queries/useReviewQuery';

const LastWeekReviewBox = () => {
  const { lastWeekReview, isExist } = useGetLastWeekReviewQuery();
  return (
    <div className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-pink p-2 text-white">
      {isExist && lastWeekReview ? (
        <ul>
          {lastWeekReview.map((review) => (
            <Image
              key={review.id}
              src={`/static/abstract${review.attributes.week}.png`}
              width="80"
              height="80"
              alt="empty"
            />
          ))}
        </ul>
      ) : (
        <Folder width="50px" fill="#0000001A" />
      )}
    </div>
  );
};

export default LastWeekReviewBox;
