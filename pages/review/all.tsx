import Title from 'components/title/title';
import MainContainer from 'components/container/mainContainer';
import ReviewList from 'components/review/reviewList';

import useGetReviewsQuery from 'queries/useReviewQuery';

const AllReviews = () => {
  const { reviews, isExist } = useGetReviewsQuery();
  return (
    <MainContainer>
      <Title text="모두보기" />
      {reviews && (
        <ReviewList
          abled={Boolean(isExist && reviews)}
          reviews={reviews}
          type="all"
        />
      )}
    </MainContainer>
  );
};

export default AllReviews;
