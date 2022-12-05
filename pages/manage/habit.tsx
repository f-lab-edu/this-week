import Navigator from 'components/navigator/navigator';
import CurrentData from 'components/title/dateTitle';
import Title from 'components/title/title';
import { HABIT_TITLE } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import CardContainer from 'components/container/cardContainer';
import HabitCard from 'components/card/habitCard';
import BottomFixedContainer from 'components/container/bottomFixedContainer';
import CreateButton from 'components/button/createButton';
import { useState } from 'react';
import CreateHabit from 'components/modal/createHabit';
import useWindowSize from 'customs/useWindowSize';
import Pencel from 'components/svgs/pencel.svg';

const Habit = () => {
  // Todo: 효율적인 모달 관리 필요
  const [modalOpen, setModalOpen] = useState(false);
  const [desktopModalOpen, setDesktopModalOpen] = useState(false);
  const { type } = useWindowSize();

  const handleBottomModal = () => {
    setModalOpen((prev) => !prev);
  };

  const handleDesktopModal = () => {
    setDesktopModalOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen">
      <Navigator />
      <MainContainer>
        <div className="pb-10">
          <CurrentData />
        </div>
        <div className="lg:flex lg:flex-col lg:items-center">
          <div>
            <Title text={HABIT_TITLE[type]} />
            <div className="hidden lg:block">
              <div className="flex justify-end pt-2">
                <button onClick={handleDesktopModal}>
                  <Pencel width="25px" fill="#808080" />
                </button>
              </div>
            </div>
            <CardContainer>
              <HabitCard content="영어공부 30분" />
              <HabitCard content="코딩테스트 1문제" />
              <HabitCard content="영양제 챙겨먹기" />
            </CardContainer>
          </div>
        </div>
        <div className="lg:hidden">
          <BottomFixedContainer>
            <div className="flex h-24 w-full items-center">
              <CreateButton onClick={handleBottomModal} />
            </div>
          </BottomFixedContainer>
        </div>
        {/* Todo: 수정 필요 */}
        {modalOpen && <CreateHabit onClick={handleBottomModal} />}
        {desktopModalOpen && <CreateHabit onClick={handleDesktopModal} />}
      </MainContainer>
    </div>
  );
};

export default Habit;
