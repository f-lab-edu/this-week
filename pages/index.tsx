import Navigator from 'components/navigator/navigator';
import CurrentData from 'components/title/dateTitle';
import HabitCard from 'components/card/habitCard';
import Title from 'components/title/title';
import StatisticSummary from 'components/statistic/statisticSummary';
import MainContainer from 'components/container/mainContainer';
import HeaderContainer from 'components/container/headerContainer';
import CardContainer from 'components/container/cardContainer';
import motivationTitle, {
  statisticSummaryTitle,
} from 'constants/title/habitTitle';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigator />
      <MainContainer>
        <HeaderContainer>
          <CurrentData />
          <Title text={motivationTitle} />
        </HeaderContainer>
        <CardContainer>
          <HabitCard content="영어공부 30분" />
          <HabitCard content="코딩테스트 1문제" />
          <HabitCard content="영양제 챙겨먹기" />
        </CardContainer>
        <section className="py-11">
          <Title text={statisticSummaryTitle} />
          <StatisticSummary />
        </section>
      </MainContainer>
    </div>
  );
}
