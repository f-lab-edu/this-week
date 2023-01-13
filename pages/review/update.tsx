import { useState } from 'react';
import { useRouter } from 'next/router';

import Title from 'components/title/title';
import CurrentData from 'components/title/dateTitle';
import { REVIEW_TITLE } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import WeekNumber from 'components/title/weekNumber';
import Plus from 'components/svgs/plus.svg';

import BottomFix from 'components/container/bottomFix';
import SaveReviewButton from 'components/button/saveReviewButton';

import useWindowSize from 'customs/useWindowSize';

import { getWeek, getMonth, isReviewDay, getYear } from 'lib/date';
import {
  useCreateReviewMutation,
  Tag,
  TextColor,
  BackgroundColor,
} from 'queries/useReviewQuery';
type FourLName = 'liked' | 'learned' | 'lacked' | 'longedFor';
type HandleFourLTextProps = {
  name: FourLName;
  value: string;
};

const UpdateReview = () => {
  const router = useRouter();
  const createReviewMutation = useCreateReviewMutation();
  const { type } = useWindowSize();
  const [fourLText, setFourLText] = useState({
    liked: '',
    learned: '',
    lacked: '',
    longedFor: '',
  });
  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);

  const saveReview = () => {
    createReviewMutation.mutate({
      data: {
        week: getWeek,
        month: getMonth,
        year: getYear,
        liked: fourLText.liked,
        learned: fourLText.learned,
        lacked: fourLText.lacked,
        longedfor: fourLText.longedFor,
        tag: { data: tags },
        rating: 0,
      },
    });
    router.push('/');
  };
  const handleFourLText = ({ name, value }: HandleFourLTextProps) => {
    setFourLText({ ...fourLText, [name]: value });
  };

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
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
        <h2 className="py-2 text-xl">태그</h2>
        <div className="relative mb-4">
          <input
            type="text"
            value={newTag}
            onChange={(event) => setNewTag(() => event.target.value)}
            placeholder="태그를 입력하세요."
            className="flex w-full items-center justify-between rounded-lg bg-main-border p-2 px-4 outline-main-blue"
          ></input>
          <button
            onClick={() => {
              setTags(() => [
                ...tags,
                {
                  id: tags.length + 1,
                  name: newTag,
                  color: TAG_BACKGROUND_COLORS[getRandomInt(3)] as {
                    text: TextColor;
                    bg: BackgroundColor;
                  },
                },
              ]);
              setNewTag('');
            }}
            className="absolute top-0 bottom-0 right-3"
          >
            <div className="rounded-full bg-soft-black bg-opacity-10 p-1">
              <Plus width="15px" fill="#FFFFFF" />
            </div>
          </button>
        </div>
        <ul className="flex flex-wrap gap-1">
          {tags.map((tag) => {
            const { bg, text } = tag.color;
            return (
              <li
                key={tag.id}
                className={`inline rounded-2xl ${bg} px-4 py-2 ${text}`}
              >
                {tag.name}
              </li>
            );
          })}
        </ul>
      </section>
      <section className="pb-5">
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
        <UpdateReview />
      </MainContainer>
    </div>
  );
};

export default Statistic;

const TAG_BACKGROUND_COLORS = [
  { text: 'text-main-red', bg: 'bg-main-red-10' },
  { text: 'text-main-blue', bg: 'bg-main-blue-10' },
  { text: 'text-main-pink', bg: 'bg-main-pink-10' },
];
