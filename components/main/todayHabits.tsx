import Title from 'components/title/title';
import CardContainer from 'components/container/cardContainer';
// import HabitCard from 'components/card/habitCard';
import dayjs from 'lib/dayjs';
import MOTIVATION_TITLE from 'constants/title/habitTitle';

import useWindowSize from 'customs/useWindowSize';

const TodayHabits = () => {
  const { type } = useWindowSize();
  const thisYear = dayjs().year();
  const thisWeek = dayjs().week();

  return (
    <div>
      <Title text={MOTIVATION_TITLE[type]} />
      <CardContainer>
        <button className="rounded-lg bg-main-beige px-5 py-3 text-lg">
          {thisYear} / {thisWeek}주차 회고 쓰기 ✏️
        </button>
        {/* {habitData?.map((habit) => (
          <HabitCard key={habit._id} content={habit.habit} id={habit._id} />
        ))} */}
      </CardContainer>
    </div>
  );
};

export default TodayHabits;
