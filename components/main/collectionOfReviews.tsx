import PastReview from 'components/review/pastReview';

const CollectionOfReviews = () => {
  return (
    <section className="p-6">
      <p className="pb-5 text-xl font-semibold">회고를 모아봤어요</p>
      <PastReview />
    </section>
  );
};

export default CollectionOfReviews;
