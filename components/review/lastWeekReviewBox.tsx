import Link from 'next/link';
import Image from 'next/image';

import Folder from 'components/svgs/folderOpen.svg';

import { useGetLastWeekReviewQuery } from 'queries/useReviewQuery';

// Todo: lastWeekReview 데이터 하나만 Get
const LastWeekReviewBox = () => {
  const { lastWeekReview, isExist } = useGetLastWeekReviewQuery();
  return (
    <section>
      {isExist && lastWeekReview && lastWeekReview[0] ? (
        <Link
          href={`/review/${lastWeekReview[0].id}`}
          as={`/review/${lastWeekReview[0].id}`}
        >
          <article className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-pink p-2 text-white">
            <Image
              key={lastWeekReview[0].id}
              src={`/static/abstract${lastWeekReview[0].attributes.week}.png`}
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

export default LastWeekReviewBox;
