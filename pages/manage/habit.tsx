import Navigator from 'components/navigator/navigator';
import CurrentData from 'components/title/dateTitle';
import Title from 'components/title/title';
import { habitTitle } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import HeaderContainer from 'components/container/headerContainer';
import CardContainer from 'components/container/cardContainer';
import HabitCard from 'components/card/habitCard';
import BottomFixedContainer from 'components/container/bottomFixedContainer';
import CreateButton from 'components/button/createButton';
import { useState } from 'react';
import CreateHabit from 'components/modal/createHabit';

const Habit = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleBottomModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen">
      <Navigator />
      <MainContainer>
        <HeaderContainer>
          <CurrentData />
          <Title text={habitTitle} />
        </HeaderContainer>
        <CardContainer>
          <HabitCard content="영어공부 30분" />
          <HabitCard content="코딩테스트 1문제" />
          <HabitCard content="영양제 챙겨먹기" />
        </CardContainer>
        <BottomFixedContainer>
          <div className="flex h-24 w-full items-center">
            <CreateButton handleClick={handleBottomModal} />
          </div>
        </BottomFixedContainer>
        {modalOpen && (
          <CreateHabit handleClick={handleBottomModal}></CreateHabit>
        )}
      </MainContainer>
    </div>
  );
};

export default Habit;
