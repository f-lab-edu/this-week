import Navigator from 'components/navigator/navigator';
import CurrentData from 'components/title/dateTitle';
import HabitCard from 'components/card/habitCard';
import Title from 'components/title/title';
import DataSummary from 'components/card/dataSummary';
import MainContainer from 'components/container/mainContainer';
import HeaderContainer from 'components/container/headerContainer';
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
        <main className="flex flex-col gap-2.5 py-6">
          <HabitCard content="영어공부 30분" />
          <HabitCard content="코딩테스트 1문제" />
          <HabitCard content="영양제 챙겨먹기" />
        </main>
        <section className="py-11">
          <Title text={statisticSummaryTitle} />
          <DataSummary />
        </section>
      </MainContainer>
    </div>
  );
}
