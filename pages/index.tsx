import Banner from 'components/main/banner';
import CollectionOfReviews from 'components/main/collectionOfReviews';
import BottomFix from 'components/container/bottomFix';
import WriteReviewButton from 'components/button/writeReviewButton';
import UpdateReviewButton from 'components/button/updateReviewButton';

import { useGetThisWeekReviewQuery } from 'queries/useReviewQuery';

export default function Home() {
  const { thisWeekReview, isExist } = useGetThisWeekReviewQuery();
  return (
    <div className="h-full pt-12">
      <Banner />
      <CollectionOfReviews />
      <BottomFix
        button={
          isExist && thisWeekReview && thisWeekReview[0] ? (
            <UpdateReviewButton reviewId={thisWeekReview[0].id} />
          ) : (
            <WriteReviewButton />
          )
        }
      />
    </div>
  );
}
