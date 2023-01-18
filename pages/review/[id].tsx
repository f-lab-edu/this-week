import { useRouter } from 'next/router';

import MainContainer from 'components/container/mainContainer';
import WeekNumber from 'components/title/weekNumber';
import ReviewContents from 'components/review/reviewContents';

import { useGetReviewQuery } from 'queries/useReviewQuery';

const ReviewDetail = () => {
  const {
    query: { id },
  } = useRouter();
  const { reviewData, isExist } = useGetReviewQuery({ id });
  const getReviewContentsView = () => {
    if (reviewData && isExist) {
      const { liked, learned, lacked, longedfor, tag } = reviewData.attributes;
      return (
        <ReviewContents
          liked={liked}
          learned={learned}
          lacked={lacked}
          longedfor={longedfor}
          tags={tag ? tag.data : []}
        />
      );
    }
  };
  return (
    <MainContainer>
      <WeekNumber />
      {getReviewContentsView()}
    </MainContainer>
  );
};

export default ReviewDetail;
