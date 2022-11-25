import Navigator from 'components/navigator/navigator';
import CurrentData from 'components/title/dateTitle';
import HabitCard from 'components/card/habitCard';
import MotivationTitle from 'components/title/motivationTitle';
import StatisticTitle from 'components/title/statisticTitle';
import DataSummary from 'components/card/dataSummary';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigator />
      <div className="p-6">
        <header className="flex flex-col gap-5">
          <CurrentData />
          <MotivationTitle />
        </header>
        <main className="flex flex-col gap-2.5 py-6">
          <HabitCard content="영어공부 30분" />
          <HabitCard content="코딩테스트 1문제" />
          <HabitCard content="영양제 챙겨먹기" />
        </main>
        <section className="py-11">
          <StatisticTitle />
          <DataSummary />
        </section>
      </div>
    </div>
  );
}
