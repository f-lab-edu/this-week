import { useRouter } from 'next/router';

import CurrentData from 'components/title/dateTitle';

import MainContainer from 'components/container/mainContainer';
import UpdateReviewForm from 'components/review/updateReviewForm';

const ReviewUpdate = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen">
      <MainContainer>
        <div className="pb-4 lg:pb-10">
          <CurrentData />
        </div>
        <UpdateReviewForm />
      </MainContainer>
    </div>
  );
};

export default ReviewUpdate;
