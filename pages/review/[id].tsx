import { useRouter } from 'next/router';

import Title from 'components/title/title';
import MainContainer from 'components/container/mainContainer';
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

  const getTitle = () => {
    if (!reviewData) return '';
    const { year, month, week } = reviewData.attributes;
    return `${year}년 ${month}월 ${week}주차 회고`;
  };

  return (
    <MainContainer>
      <Title text={getTitle()} />
      {getReviewContentsView()}
    </MainContainer>
  );
};

export default ReviewDetail;
