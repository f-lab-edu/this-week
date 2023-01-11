import Folder from 'components/svgs/folder.svg';

import { useGetLastMonthReviewQuery } from 'queries/useReviewQuery';

const LastMonthReviewBox = () => {
  const data = useGetLastMonthReviewQuery();
  return (
    <div className="mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-red p-5 text-white">
      {data ? (
        <ul>
          {data.map((item) => {
            const {
              attributes: { week, month, year },
              id,
            } = item;
            return <li key={id}>{`${year}/${month}/${week}의 회고`}</li>;
          })}
        </ul>
      ) : (
        <Folder width="50px" fill="#0000001A" />
      )}
    </div>
  );
};

export default LastMonthReviewBox;
