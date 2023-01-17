import Title from 'components/title/title';
import MainContainer from 'components/container/mainContainer';

import ReviewDetail from 'components/review/reviewDetail';

import { useGetLastWeekReviewQuery } from 'queries/useReviewQuery';

// Todo: 지난주 데이터 하나만 가져오기
const LastWeekReview = () => {
  const { lastWeekReview, isExist } = useGetLastWeekReviewQuery();
  const isVisible = lastWeekReview && isExist;
  return (
    <MainContainer>
      <Title text="지난주 회고보기" />
      {isVisible ? (
        <ReviewDetail
          liked={lastWeekReview[0].attributes.liked}
          learned={lastWeekReview[0].attributes.learned}
          lacked={lastWeekReview[0].attributes.lacked}
          longedfor={lastWeekReview[0].attributes.longedfor}
          tags={lastWeekReview[0].attributes.tag.data}
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          회고가 없어요.
        </div>
      )}
    </MainContainer>
  );
};

export default LastWeekReview;
