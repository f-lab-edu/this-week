import Folder from 'components/svgs/folderOpen.svg';
import Rocket from 'components/svgs/rocket.svg';

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
            <Rocket width="25px" height="25px" fill="#0000001A" />
          </div>
        ))
      ) : (
        <Folder width="50px" fill="#0000001A" />
      )}
    </div>
  );
};

export default AllReviewBox;
