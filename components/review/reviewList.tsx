import Link from 'next/link';
import { ReviewType } from 'queries/useReviewQuery';
import ReviewSummaryCard from 'components/card/reviewSummaryCard';

type ReviewListType = {
  abled: boolean;
  reviews: ReviewType[];
  type: 'all' | 'lastMonth';
};

const ReviewList = ({ abled, reviews, type }: ReviewListType) => {
  return (
    <ul className="flex flex-col gap-4 pt-8">
      {abled &&
        reviews.map((review) => {
          const {
            attributes: { liked, week, year, month },
            id,
          } = review;
          return (
            <Link
              key={id}
              href={{
                pathname: `/review/${id}`,
                query: { weekType: type },
              }}
              as={`/review/${id}`}
            >
              <ReviewSummaryCard
                id={id}
                liked={liked}
                week={week}
                year={year}
                month={month}
              />
            </Link>
          );
        })}
    </ul>
  );
};

export default ReviewList;
