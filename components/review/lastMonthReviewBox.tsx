import Image from 'next/image';

import Folder from 'components/svgs/folderOpen.svg';

import { useGetLastMonthReviewQuery } from 'queries/useReviewQuery';

const LastMonthReviewBox = () => {
  const { lastMonthReviews, isExist } = useGetLastMonthReviewQuery();
  return (
    <div className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-red p-2 text-white">
      {lastMonthReviews && isExist ? (
        <ul>
          {lastMonthReviews.map((review) => (
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

export default LastMonthReviewBox;
