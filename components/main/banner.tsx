import dynamic from 'next/dynamic';

import Title from 'components/title/title';
import CardContainer from 'components/container/cardContainer';
import dayjs from 'lib/dayjs';
import MOTIVATION_TITLE from 'constants/title/habitTitle';

import CurrentData from 'components/title/dateTitle';

import AsyncBoundary from 'components/error/asyncBoundary';
import ErrorAlert from 'components/error/errorAlert';

import useWindowSize from 'customs/useWindowSize';

const Banner = () => {
  const { type } = useWindowSize();
  const thisWeek = dayjs().week();
  return (
    <div className="bg-[url('/static/background.jpg')] bg-cover p-6">
      <div className="pb-6 lg:pb-10">
        <CurrentData />
      </div>
      <AsyncBoundary
        pendingFallback={<div>Loading...</div>}
        rejectedFallback={({ error, reset }) => (
          <ErrorAlert error={error} reset={reset} />
        )}
      >
        <div>
          <div className="pb-2">
            <Title text={MOTIVATION_TITLE[type]} />
          </div>
          <CardContainer>
            <button className="rounded-lg bg-main-beige px-5 py-3 text-lg font-semibold">
              {thisWeek}주차 회고 쓰기 ✏️
            </button>
          </CardContainer>
        </div>
      </AsyncBoundary>
    </div>
  );
};

export default Banner;
