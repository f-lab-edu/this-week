import Title from 'components/title/title';
import MainContainer from 'components/container/mainContainer';
import WeekNumber from 'components/title/weekNumber';
import ReviewDetail from 'components/review/reviewDetail';

import { useGetThisWeekReviewQuery } from 'queries/useReviewQuery';

const ThisweekReview = () => {
  const { thisWeekReview, isExist } = useGetThisWeekReviewQuery();
  const isVisible = thisWeekReview && isExist;

  return (
    <MainContainer>
      <Title text="이번주 회고보기" />
      <WeekNumber />
      {isVisible && (
        <ReviewDetail
          liked={thisWeekReview[0].attributes.liked}
          learned={thisWeekReview[0].attributes.learned}
          lacked={thisWeekReview[0].attributes.lacked}
          longedfor={thisWeekReview[0].attributes.longedfor}
          tags={thisWeekReview[0].attributes.tag.data}
        />
      )}
    </MainContainer>
  );
};

export default ThisweekReview;
