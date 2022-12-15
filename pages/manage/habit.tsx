import Navigator from 'components/navigator/navigator';
import CurrentData from 'components/title/dateTitle';
import Title from 'components/title/title';
import { HABIT_TITLE } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import CardContainer from 'components/container/cardContainer';
import HabitCard from 'components/card/habitCard';
import BottomFixedContainer from 'components/container/bottomSheetContainer';
import CreateButton from 'components/button/createButton';
import CreateHabit from 'components/modal/createHabitModal';
import useWindowSize from 'customs/useWindowSize';
import Pencel from 'components/svgs/pencel.svg';
import useModal from 'customs/useModal';
import Modal from 'components/modal/modal';
import useHabitQuery from 'queries/useHabitQuery';

const Habit = () => {
  const { openModal } = useModal();
  const { type } = useWindowSize();
  const habitData = useHabitQuery();

  const handleModal = () => {
    openModal({ element: <CreateHabit /> });
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
                <button onClick={handleModal}>
                  <Pencel width="25px" fill="#808080" />
                </button>
              </div>
            </div>
            <CardContainer>
              {habitData?.map((habit) => (
                <HabitCard key={habit._id} content={habit.habit} />
              ))}
            </CardContainer>
          </div>
        </div>
        <div className="lg:hidden">
          <BottomFixedContainer>
            <div className="flex h-24 w-full items-center">
              <CreateButton onClick={handleModal} />
            </div>
          </BottomFixedContainer>
        </div>
      </MainContainer>
      <Modal />
    </div>
  );
};

export default Habit;
