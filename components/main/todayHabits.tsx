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
        <HabitCard content="영어공부 30분" />
        <HabitCard content="코딩테스트 1문제" />
        <HabitCard content="영양제 챙겨먹기" />
      </CardContainer>
    </div>
  );
};

export default TodayHabits;
