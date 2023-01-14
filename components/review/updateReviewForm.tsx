import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import Title from 'components/title/title';

import { REVIEW_TITLE } from 'constants/title/habitTitle';

import WeekNumber from 'components/title/weekNumber';
import Plus from 'components/svgs/plus.svg';

import BottomFix from 'components/container/bottomFix';
import SaveReviewButton from 'components/button/saveReviewButton';

import useWindowSize from 'customs/useWindowSize';

import { ReviewType } from 'queries/useReviewQuery';

import { getWeek, getMonth, getYear } from 'lib/date';
import {
  useUpdateReviewMutation,
  Tag,
  TextColor,
  BackgroundColor,
} from 'queries/useReviewQuery';

import { getReview } from 'lib/apis';
type FourLName = 'liked' | 'learned' | 'lacked' | 'longedfor';
type HandleFourLTextProps = {
  name: FourLName;
  value: string;
};

const UpdateReviewForm = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };

  // Todo: 커스텀 훅으로 뺐을 떄 리렌더링 문제 해결해야함
  const { data: reviewData } = useQuery<ReviewType, AxiosError>(
    ['review', id],
    async () => {
      const { data } = await getReview(id);
      return data.data;
    },
    {
      enabled: !!id,
    },
  );

  const updateReviewMutation = useUpdateReviewMutation();
  const { type } = useWindowSize();
  const [fourLText, setFourLText] = useState({
    liked: '',
    learned: '',
    lacked: '',
    longedfor: '',
  });
  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);

  // Todo: useEffect 없앨 수 있는 방법은 없을까?
  useEffect(() => {
    if (reviewData) {
      const { liked, learned, lacked, longedfor, tag } = reviewData.attributes;
      setFourLText({
        liked,
        learned,
        lacked,
        longedfor,
      });
      setTags(tag.data || []);
    }
  }, [reviewData]);

  const saveReview = () => {
    updateReviewMutation.mutate({
      id: Number(id),
      week: getWeek,
      month: getMonth,
      year: getYear,
      liked: fourLText.liked,
      learned: fourLText.learned,
      lacked: fourLText.lacked,
      longedfor: fourLText.longedfor,
      tag: { data: tags },
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
        <Title text={REVIEW_TITLE['update'][type]} />
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
          {tags?.map((tag) => {
            const { bg, text } = tag.color;
            return (
              <li
                key={tag.name}
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
          name="longedfor"
          id="longedfor"
          cols={30}
          rows={10}
          value={fourLText.longedfor}
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

export default UpdateReviewForm;

const TAG_BACKGROUND_COLORS = [
  { text: 'text-main-red', bg: 'bg-main-red-10' },
  { text: 'text-main-blue', bg: 'bg-main-blue-10' },
  { text: 'text-main-pink', bg: 'bg-main-pink-10' },
];
