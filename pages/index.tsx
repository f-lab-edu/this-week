import Banner from 'components/main/banner';
import CollectionOfReviews from 'components/main/collectionOfReviews';
import BottomFix from 'components/container/bottomFix';
import WriteReviewButton from 'components/button/writeReviewButton';
import UpdateReviewButton from 'components/button/updateReviewButton';

import { useGetThisWeekReviewQuery } from 'queries/useReviewQuery';

export default function Home() {
  const { isExist } = useGetThisWeekReviewQuery();
  return (
    <div className="min-h-screen pt-12">
      <Banner />
      <CollectionOfReviews />
      <BottomFix
        button={isExist ? <UpdateReviewButton /> : <WriteReviewButton />}
      />
    </div>
  );
}
