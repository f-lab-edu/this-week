import Title from 'components/title/title';
import MainContainer from 'components/container/mainContainer';

import { useGetLastWeekReviewQuery } from 'queries/useReviewQuery';

// Todo: 지난주 데이터 하나만 가져오기
const LastWeekReview = () => {
  const { lastWeekReview } = useGetLastWeekReviewQuery();
  return (
    <MainContainer>
      <Title text="지난주 회고보기" />
      <div>{lastWeekReview && lastWeekReview[0]?.attributes.learned}</div>
    </MainContainer>
  );
};

export default LastWeekReview;
