import CurrentData from 'components/title/dateTitle';

import { Suspense } from 'react';

import MainContainer from 'components/container/mainContainer';
import UpdateReviewForm from 'components/review/updateReviewForm';

import Spinner from 'components/common/spinner';

// import AsyncBoundary from 'components/error/asyncBoundary';

const ReviewUpdate = () => {
  return (
    <div className="min-h-screen">
      <MainContainer>
        <div className="pb-4 lg:pb-10">
          <CurrentData />
        </div>
        <Suspense
          fallback={<Spinner />}
          // pendingFallback={<div>Loading...</div>}
          // rejectedFallback={() => <div>Error</div>}
        >
          <UpdateReviewForm />
        </Suspense>
      </MainContainer>
    </div>
  );
};

export default ReviewUpdate;
