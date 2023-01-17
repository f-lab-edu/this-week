import Title from 'components/title/title';
import MainContainer from 'components/container/mainContainer';
import WeekNumber from 'components/title/weekNumber';

import {
  useGetThisWeekReviewQuery,
  BackgroundColor,
  TextColor,
} from 'queries/useReviewQuery';

type TextCardProps = {
  title: '잘했어요' | '배웠어요' | '부족했어요' | '이렇게 할 거예요';
  content: string;
};
type TagCardProps = {
  tag: string;
  bgColor: BackgroundColor;
  textColor: TextColor;
};

const TagCard = ({ tag, bgColor, textColor }: TagCardProps) => {
  return (
    <span className={`${bgColor} ${textColor} rounded-full px-4 py-2`}>
      #{tag}
    </span>
  );
};

const TextCard = ({ title, content }: TextCardProps) => {
  return (
    <section className="flex flex-col gap-2">
      <p className="text-xl font-semibold">{title}</p>
      <article className="rounded-lg bg-main-beige py-5 px-4">
        <pre>{content}</pre>
      </article>
    </section>
  );
};

const ThisweekReview = () => {
  const { thisWeekReview, isExist } = useGetThisWeekReviewQuery();
  const isVisible = thisWeekReview && isExist;

  return (
    <MainContainer>
      <Title text="이번주 회고보기" />
      <WeekNumber />
      {isVisible && (
        <main className="flex flex-col gap-8 py-5">
          <section className="flex gap-2">
            {thisWeekReview[0].attributes.tag.data?.map((tag) => {
              return (
                <TagCard
                  key={tag.name}
                  tag={tag.name}
                  bgColor={tag.color.bg}
                  textColor={tag.color.text}
                />
              );
            })}
          </section>
          <TextCard
            title="잘했어요"
            content={thisWeekReview[0].attributes.liked}
          />
          <TextCard
            title="배웠어요"
            content={thisWeekReview[0].attributes.learned}
          />
          <TextCard
            title="부족했어요"
            content={thisWeekReview[0].attributes.lacked}
          />
          <TextCard
            title="이렇게 할 거예요"
            content={thisWeekReview[0].attributes.longedfor}
          />
        </main>
      )}
    </MainContainer>
  );
};

export default ThisweekReview;
