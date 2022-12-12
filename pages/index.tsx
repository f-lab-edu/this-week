import Navigator from 'components/navigator/navigator';
import CurrentData from 'components/title/dateTitle';

import Title from 'components/title/title';
import StatisticFourBoxes from 'components/statistic/statisticFourBoxes';
import MainContainer from 'components/container/mainContainer';
import TodayHabits from 'components/main/todayHabits';
import { STATISTIC_SUMMARY_TITLE } from 'constants/title/habitTitle';
import useWindowSize from 'customs/useWindowSize';
import HasStatisticSummaryContainer from 'components/container/hasStatisticSummaryContainer';

export default function Home() {
  const { type } = useWindowSize();
  return (
    <div className="min-h-screen">
      <Navigator />
      <MainContainer>
        <div className="pb-10">
          <CurrentData />
        </div>
        <HasStatisticSummaryContainer main={<TodayHabits />} />
        <section className="flex flex-col gap-6 py-11 lg:hidden">
          <Title text={STATISTIC_SUMMARY_TITLE[type]} />
          <StatisticFourBoxes />
        </section>
      </MainContainer>
    </div>
  );
}
