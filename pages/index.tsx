import Banner from 'components/main/banner';
import CollectionOfReviews from 'components/main/collectionOfReviews';

export default function Home() {
  return (
    <div className="min-h-screen pt-12">
      <Banner />
      <CollectionOfReviews />
    </div>
  );
}
