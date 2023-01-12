import Title from 'components/title/title';
import CurrentData from 'components/title/dateTitle';
import { REVIEW_TITLE } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import WeekNumber from 'components/title/weekNumber';
import Plus from 'components/svgs/plus.svg';

import CreateHabitModal from 'components/modal/createHabitModal';
import useWindowSize from 'customs/useWindowSize';

import useModal from 'customs/useModal';
import HasStatisticSummaryContainer from 'components/container/hasStatisticSummaryContainer';

const Review = () => {
  const { openModal } = useModal();
  const { type } = useWindowSize();

  const handleModal = () => {
    openModal({ element: <CreateHabitModal />, props: {} });
  };

  return (
    <main>
      <div className="lg:flex lg:flex-col lg:gap-2">
        <Title text={REVIEW_TITLE['offTime'][type]} />
        <WeekNumber />
      </div>
      <section className="py-5">
        <h2 className="py-2 text-xl">좋았어요</h2>
        <textarea
          name="good"
          id="good"
          cols={50}
          rows={10}
          className="w-full rounded-lg bg-main-beige p-4 outline-none"
        ></textarea>
      </section>
      <section className="pb-5">
        <h2 className="py-2 text-xl">배웠어요</h2>
        <textarea
          name="bad"
          id="bad"
          cols={30}
          rows={10}
          className="w-full rounded-lg bg-main-beige p-4 outline-none"
        ></textarea>
      </section>
      <section className="pb-5">
        <h2 className="py-2 text-xl">부족했어요</h2>
        <textarea
          name="next"
          id="next"
          cols={30}
          rows={10}
          className="w-full rounded-lg bg-main-beige p-4 outline-none"
        ></textarea>
      </section>
      <section className="pb-5">
        <h2 className="py-2 text-xl">다음주는 이렇게 할래요</h2>
        <textarea
          name="next"
          id="next"
          cols={30}
          rows={10}
          className="w-full rounded-lg bg-main-beige p-4 outline-none"
        ></textarea>
      </section>
      <div className="py-5">
        <button
          onClick={handleModal}
          className="flex h-20 w-full items-center justify-center rounded-lg bg-main-border"
        >
          <Plus width="25px" height="25px" fill="#FFFFFF" />
        </button>
      </div>
    </main>
  );
};

const Statistic = () => {
  return (
    <div className="min-h-screen">
      <MainContainer>
        <div className="pb-4 lg:pb-10">
          <CurrentData />
        </div>
        <HasStatisticSummaryContainer main={<Review />} />
      </MainContainer>
    </div>
  );
};

export default Statistic;
