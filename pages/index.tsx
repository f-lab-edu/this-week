import Navigator from 'components/navigator/navigator';
import CurrentData from 'components/title/dateTitle';
import HabitCard from 'components/card/habitCard';
import Title from 'components/title/title';
import StatisticSummary from 'components/statistic/statisticSummary';
import MainContainer from 'components/container/mainContainer';
import CardContainer from 'components/container/cardContainer';
import MOTIVATION_TITLE, {
  STATISTIC_SUMMARY_TITLE,
} from 'constants/title/habitTitle';
import useWindowSize from 'customs/useWindowSize';
import StatisticSummaryText from 'components/main/statisticSummaryText';

export default function Home() {
  const { type } = useWindowSize();
  return (
    <div className="min-h-screen">
      <Navigator />
      <MainContainer>
        <div className="pb-10">
          <CurrentData />
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
          <div className="lg:col-span-2 lg:flex lg:flex-col lg:items-center">
            <div>
              <Title text={MOTIVATION_TITLE[type]} />
              <CardContainer>
                <HabitCard content="영어공부 30분" />
                <HabitCard content="코딩테스트 1문제" />
                <HabitCard content="영양제 챙겨먹기" />
              </CardContainer>
            </div>
          </div>
          <div className="col-span-1 hidden rounded-lg bg-white shadow-3xl lg:block">
            <div className="w-full px-5 py-6">
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-semibold">습관 데이터 요약</p>
                <Title
                  text={STATISTIC_SUMMARY_TITLE[type]}
                  size="lg"
                  bold="medium"
                />
              </div>
              <div className="flex flex-col py-5">
                <StatisticSummaryText>
                  <StatisticSummaryText.ThisWeekDone />
                  <StatisticSummaryText.LastWeekDone />
                  <StatisticSummaryText.ThisWeekAchivementRate />
                  <StatisticSummaryText.LastWeekAchivementRate />
                </StatisticSummaryText>
              </div>
              <div className="flex justify-center py-5">
                <div className="flex h-48 w-48 items-center justify-center rounded-full border border-black">
                  <p className="text-2xl">78%</p>
                </div>
              </div>
              <div>
                <p className="text-lg">이번주</p>
                <div className="h-24 border">Chart Section</div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-11 lg:hidden">
          <Title text={STATISTIC_SUMMARY_TITLE[type]} />
          <StatisticSummary />
        </section>
      </MainContainer>
    </div>
  );
}
