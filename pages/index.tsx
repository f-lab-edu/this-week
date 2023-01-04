import dynamic from 'next/dynamic';

// import Navigator from 'components/navigator/navigator';
import CurrentData from 'components/title/dateTitle';

import Title from 'components/title/title';
import StatisticFourBoxes from 'components/statistic/statisticFourBoxes';
import MainContainer from 'components/container/mainContainer';

import { STATISTIC_SUMMARY_TITLE } from 'constants/title/habitTitle';
import useWindowSize from 'customs/useWindowSize';
import HasStatisticSummaryContainer from 'components/container/hasStatisticSummaryContainer';
import AsyncBoundary from 'components/error/asyncBoundary';
import ErrorAlert from 'components/error/errorAlert';

import useGetReviewsQuery from 'queries/useReviewQuery';

const TodayHabits = dynamic(() => import('components/main/todayHabits'), {
  ssr: false,
});

export default function Home() {
  const { type } = useWindowSize();
  const data = useGetReviewsQuery();
  return (
    <div className="min-h-screen">
      <MainContainer>
        <div className="pb-4 lg:pb-10">
          <CurrentData />
        </div>
        <AsyncBoundary
          pendingFallback={<div>Loading...</div>}
          rejectedFallback={({ error, reset }) => (
            <ErrorAlert error={error} reset={reset} />
          )}
        >
          <HasStatisticSummaryContainer main={<TodayHabits />} />
        </AsyncBoundary>
        <section className="flex flex-col gap-6 py-11 lg:hidden">
          <Title text={STATISTIC_SUMMARY_TITLE[type]} />
          <StatisticFourBoxes />
        </section>
      </MainContainer>
    </div>
  );
}
