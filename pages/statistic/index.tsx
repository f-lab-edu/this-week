import Navigator from 'components/navigator/navigator';
import CurrentData from 'components/title/dateTitle';
import Title from 'components/title/title';
import { STATISTIC_TITLE } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import HeaderContainer from 'components/container/headerContainer';
import StatisticSummary from 'components/statistic/statisticSummary';
import WeekActivity from 'components/statistic/weekActivity';
import HabitTable from 'components/statistic/habitTable';
import useWindowSize from 'customs/useWindowSize';

const Statistic = () => {
  const { type } = useWindowSize();
  return (
    <div className="min-h-screen">
      <Navigator />
      <MainContainer>
        <HeaderContainer>
          <CurrentData />
          <Title text={STATISTIC_TITLE[type]} />
        </HeaderContainer>
        <main className="py-5">
          <div className="pb-5 text-xl">
            <p className="py-1">
              이번주에 완료한 습관은
              <strong className="text-2xl font-bold"> 52개</strong>
              예요.
            </p>
            <p className="py-1">
              이번주 목표에 <strong className="text-2xl font-bold"> 70%</strong>
              다다랐어요.
            </p>
            <p className="py-1">
              지난주보다 <strong className="text-2xl font-bold"> 2%</strong>
              잘하고 있어요.
            </p>
          </div>
          <div className="py-10">
            {/* 슬라이어 구현 예정 */}
            <StatisticSummary />
            <WeekActivity />
            <HabitTable />
          </div>
        </main>
      </MainContainer>
    </div>
  );
};

export default Statistic;
