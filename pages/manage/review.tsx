import Navigator from 'components/navigator/navigator';

import Title from 'components/title/title';
import { reviewTitle } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import HeaderContainer from 'components/container/headerContainer';
import Icon from 'components/icon/icon';
import { useState } from 'react';
import CreateReview from 'components/modal/createReview';

const Statistic = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleReviewModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen">
      <Navigator />
      <MainContainer>
        <HeaderContainer>
          <Title text={reviewTitle} />
        </HeaderContainer>
        <main className="py-5">
          <section className="pb-5">
            <h2 className="py-2 text-xl">이건 잘했어요.</h2>
            <textarea
              name="good"
              id="good"
              cols={30}
              rows={10}
              className="w-full rounded-lg bg-main-beige p-4 outline-none"
            ></textarea>
          </section>
          <section className="pb-5">
            <h2 className="py-2 text-xl">이건 조금 아쉬워요.</h2>
            <textarea
              name="bad"
              id="bad"
              cols={30}
              rows={10}
              className="w-full rounded-lg bg-main-beige p-4 outline-none"
            ></textarea>
          </section>
          <section className="pb-5">
            <h2 className="py-2 text-xl">다음주엔 이렇게 할 거예요.</h2>
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
              onClick={handleReviewModal}
              className="flex h-20 w-full items-center justify-center rounded-lg bg-main-border"
            >
              <Icon icon="faPlus" color="#FFFFFF" />
            </button>
          </div>
        </main>
      </MainContainer>
      {modalOpen && <CreateReview handleClick={handleReviewModal} />}
    </div>
  );
};

export default Statistic;
