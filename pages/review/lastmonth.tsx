import Title from 'components/title/title';
import MainContainer from 'components/container/mainContainer';
import ReviewList from 'components/review/reviewList';

import { useGetLastMonthReviewQuery } from 'queries/useReviewQuery';

const LastMonthReviews = () => {
  const { lastMonthReviews, isExist } = useGetLastMonthReviewQuery();
  return (
    <MainContainer>
      <Title text="지난달 회고보기" />
      {lastMonthReviews && (
        <ReviewList
          abled={Boolean(isExist && lastMonthReviews)}
          reviews={lastMonthReviews}
          type="lastMonth"
        />
      )}
    </MainContainer>
  );
};

export default LastMonthReviews;
