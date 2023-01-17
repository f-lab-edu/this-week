import Image from 'next/image';

import Folder from 'components/svgs/folderOpen.svg';

import { useGetThisWeekReviewQuery } from 'queries/useReviewQuery';

const ThisWeekReviewBox = () => {
  const { thisWeekReview, isExist } = useGetThisWeekReviewQuery();
  return (
    <div className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-beige p-2">
      {isExist && thisWeekReview ? (
        <ul>
          {thisWeekReview.map((review) => (
            <li key={review.id} className="py-1 font-normal">
              <Image
                src={`/static/abstract${review.attributes.week}.png`}
                width="80"
                height="80"
                alt="empty"
              />
            </li>
          ))}
        </ul>
      ) : (
        <Folder width="50px" fill="#0000001A" />
      )}
    </div>
  );
};

export default ThisWeekReviewBox;
