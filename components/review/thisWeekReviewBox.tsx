import Link from 'next/link';
import Image from 'next/image';

import Folder from 'components/svgs/folderOpen.svg';

import { useGetThisWeekReviewQuery } from 'queries/useReviewQuery';

// Todo: thisWeekReviewBox 데이터 하나만 Get
const ThisWeekReviewBox = () => {
  const { thisWeekReview, isExist } = useGetThisWeekReviewQuery();
  return (
    <section>
      {isExist && thisWeekReview && thisWeekReview[0] ? (
        <Link
          href={`/review/${thisWeekReview[0].id}`}
          as={`/review/${thisWeekReview[0].id}`}
        >
          <article className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-beige p-2">
            <Image
              src={`/static/abstract${thisWeekReview[0].attributes.week}.png`}
              width="80"
              height="80"
              alt="empty"
            />
          </article>
        </Link>
      ) : (
        <article className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-beige p-2">
          <Folder width="50px" fill="#0000001A" />
        </article>
      )}
    </section>
  );
};

export default ThisWeekReviewBox;
