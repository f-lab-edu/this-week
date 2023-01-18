import { ReviewType } from 'queries/useReviewQuery';
import ReviewSummaryCard from 'components/card/reviewSummaryCard';

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
            <ReviewSummaryCard
              key={id}
              id={id}
              liked={liked}
              week={week}
              year={year}
              month={month}
            />
          );
        })}
    </ul>
  );
};

export default ReviewList;
