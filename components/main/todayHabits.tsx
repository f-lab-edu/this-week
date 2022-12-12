import { useState, useEffect } from 'react';
import Title from 'components/title/title';
import CardContainer from 'components/container/cardContainer';
import HabitCard from 'components/card/habitCard';
import MOTIVATION_TITLE from 'constants/title/habitTitle';
import axios from 'axios';

import useWindowSize from 'customs/useWindowSize';

type Habits = {
  habit: string;
  _id: number;
};

const TodayHabits = () => {
  const { type } = useWindowSize();
  const [habits, setHabits] = useState<Habits[] | []>([]);

  const handleFetch = async () => {
    await axios('/api/habits').then((res) => {
      setHabits(res.data.habits);
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <Title text={MOTIVATION_TITLE[type]} />
      <CardContainer>
        {habits.map((habit) => (
          <HabitCard key={habit._id} content={habit.habit} />
        ))}
      </CardContainer>
    </div>
  );
};

export default TodayHabits;
