import Image from 'next/image';

import Folder from 'components/svgs/folderOpen.svg';

import { useGetLastMonthReviewQuery } from 'queries/useReviewQuery';

const LastMonthReviewBox = () => {
  const { lastMonthReviews, isExist } = useGetLastMonthReviewQuery();
  return (
    <div className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-red p-2 text-white">
      {lastMonthReviews && isExist ? (
        <Image
          src={`/static/abstract${lastMonthReviews[0].attributes.week}.png`}
          width="80"
          height="80"
          alt="empty"
        />
      ) : (
        <Folder width="50px" fill="#0000001A" />
      )}
    </div>
  );
};

export default LastMonthReviewBox;
