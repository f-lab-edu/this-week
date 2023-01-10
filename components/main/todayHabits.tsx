import Title from 'components/title/title';
import CardContainer from 'components/container/cardContainer';
import HabitCard from 'components/card/habitCard';
import MOTIVATION_TITLE from 'constants/title/habitTitle';

import useWindowSize from 'customs/useWindowSize';

const TodayHabits = () => {
  const { type } = useWindowSize();

  return (
    <div>
      <Title text={MOTIVATION_TITLE[type]} />
      <CardContainer>
        {/* {habitData?.map((habit) => (
          <HabitCard key={habit._id} content={habit.habit} id={habit._id} />
        ))} */}
      </CardContainer>
    </div>
  );
};

export default TodayHabits;
