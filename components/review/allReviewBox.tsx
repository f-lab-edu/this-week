import Folder from 'components/svgs/folder.svg';

import useGetReviewsQuery from 'queries/useReviewQuery';

const AllReviewBox = () => {
  const { reviews, isExist } = useGetReviewsQuery({ recent: 4 });
  return (
    <div className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-beige p-2">
      {isExist && reviews ? (
        <ul>
          {reviews.map((review) => {
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

export default AllReviewBox;
