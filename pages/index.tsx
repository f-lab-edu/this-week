import Banner from 'components/main/banner';
import CollectionOfReviews from 'components/main/collectionOfReviews';
import BottomFix from 'components/container/bottomFix';
import WriteReviewButton from 'components/button/writeReviewButton';

export default function Home() {
  return (
    <div className="min-h-screen pt-12">
      <Banner />
      <CollectionOfReviews />
      <BottomFix button={<WriteReviewButton />} />
    </div>
  );
}
