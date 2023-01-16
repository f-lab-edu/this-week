import { ReviewType } from 'queries/useReviewQuery';

type ReviewListType = {
  abled: boolean;
  reviews: ReviewType[];
};

const ReviewList = ({ abled, reviews }: ReviewListType) => {
  return (
    <ul className="flex flex-col gap-4 pt-8">
      {abled &&
        reviews.map((review) => {
          const {
            attributes: { liked, week, year, month },
            id,
          } = review;
          return (
            <li
              key={id}
              className="flex w-full flex-col gap-4 rounded-lg bg-main-beige p-4 hover:scale-105"
            >
              <p className="font-semibold">{`${year}년 ${month}월 ${week}주차 회고`}</p>
              <div className="text-lg">{liked}</div>
            </li>
          );
        })}
    </ul>
  );
};

export default ReviewList;
