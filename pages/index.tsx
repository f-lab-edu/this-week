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

export default function Home() {
  const { type } = useWindowSize();
  return (
    <div className="min-h-screen">
      <Navigator />
      <MainContainer>
        <div className="pb-5">
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
          <div className="fixed top-28 right-12 bottom-0 hidden h-3/4 w-100 rounded-lg bg-white shadow-3xl lg:block">
            <div className="w-full px-5 py-6">
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-semibold">습관 데이터 요약</p>
                <Title
                  text={STATISTIC_SUMMARY_TITLE[type]}
                  size="lg"
                  bold="medium"
                />
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
