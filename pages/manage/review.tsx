import { useState } from 'react';

import Title from 'components/title/title';
import CurrentData from 'components/title/dateTitle';
import { REVIEW_TITLE } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import WeekNumber from 'components/title/weekNumber';

import BottomFix from 'components/container/bottomFix';
import SaveReviewButton from 'components/button/saveReviewButton';

import useWindowSize from 'customs/useWindowSize';

import { isReviewDay } from 'lib/date';

type FourLName = 'liked' | 'learned' | 'lacked' | 'longedFor';
type HandleFourLTextProps = {
  name: FourLName;
  value: string;
};

const Review = () => {
  const { type } = useWindowSize();
  const [fourLText, setFourLText] = useState({
    liked: '',
    learned: '',
    lacked: '',
    longedFor: '',
  });

  const saveReview = () => {};
  const handleFourLText = ({ name, value }: HandleFourLTextProps) => {
    setFourLText({ ...fourLText, [name]: value });
  };

  return (
    <main className="pb-28">
      <div className="lg:flex lg:flex-col lg:gap-2">
        <Title
          text={
            isReviewDay
              ? REVIEW_TITLE['onTime'][type]
              : REVIEW_TITLE['offTime'][type]
          }
        />
        <WeekNumber />
      </div>
      <section className="py-5">
        <h2 className="py-2 text-xl">잘했어요</h2>
        <textarea
          name="liked"
          id="liked"
          cols={30}
          rows={10}
          value={fourLText.liked}
          onChange={(event) => {
            const { name, value } = event.target as {
              name: FourLName;
              value: string;
            };
            handleFourLText({ name, value });
          }}
          className="w-full rounded-lg bg-main-beige p-4 leading-6 outline-none"
        ></textarea>
      </section>
      <section className="pb-5">
        <h2 className="py-2 text-xl">배웠어요</h2>
        <textarea
          name="learned"
          id="learned"
          cols={30}
          rows={10}
          value={fourLText.learned}
          onChange={(event) => {
            const { name, value } = event.target as {
              name: FourLName;
              value: string;
            };
            handleFourLText({ name, value });
          }}
          className="w-full rounded-lg bg-main-beige p-4 outline-none"
        ></textarea>
      </section>
      <section className="pb-5">
        <h2 className="py-2 text-xl">부족했어요</h2>
        <textarea
          name="lacked"
          id="lacked"
          cols={30}
          rows={10}
          value={fourLText.lacked}
          onChange={(event) => {
            const { name, value } = event.target as {
              name: FourLName;
              value: string;
            };
            handleFourLText({ name, value });
          }}
          className="w-full rounded-lg bg-main-beige p-4 outline-none"
        ></textarea>
      </section>
      <section className="pb-5">
        <h2 className="py-2 text-xl">다음주는</h2>
        <textarea
          name="longedFor"
          id="longedFor"
          cols={30}
          rows={10}
          value={fourLText.longedFor}
          onChange={(event) => {
            const { name, value } = event.target as {
              name: FourLName;
              value: string;
            };
            handleFourLText({ name, value });
          }}
          className="w-full rounded-lg bg-main-beige p-4 outline-none"
        ></textarea>
      </section>
      <BottomFix button={<SaveReviewButton onClick={saveReview} />} />
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
        <Review />
      </MainContainer>
    </div>
  );
};

export default Statistic;
