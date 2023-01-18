import Folder from 'components/svgs/folderOpen.svg';
import Image from 'next/image';

import useGetReviewsQuery from 'queries/useReviewQuery';

const AllReviewBox = () => {
  const { reviews, isExist } = useGetReviewsQuery({ recent: 4 });

  return (
    <div className="mb-2 grid h-40 grid-cols-2 gap-1">
      {isExist && reviews ? (
        reviews.map((review) => (
          <div
            key={review.id}
            className="flex items-center justify-center rounded-lg bg-main-beige text-2xl"
          >
            <Image
              src={`/static/abstract${review.attributes.week}.png`}
              width="50"
              height="50"
              alt="empty"
            />
          </div>
        ))
      ) : (
        <Folder width="50px" fill="#0000001A" />
      )}
    </div>
  );
};

export default AllReviewBox;
