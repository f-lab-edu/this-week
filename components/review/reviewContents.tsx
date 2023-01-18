import TagCard from 'components/review/tagCard';
import TextCard from 'components/review/textCard';

import { BackgroundColor, TextColor } from 'queries/useReviewQuery';

type ReviewContentsProps = {
  liked: string;
  learned: string;
  lacked: string;
  longedfor: string;
  tags:
    | {
        name: string;
        color: {
          bg: BackgroundColor;
          text: TextColor;
        };
      }[]
    | null;
};

const ReviewContents = ({
  liked,
  learned,
  lacked,
  longedfor,
  tags,
}: ReviewContentsProps) => {
  return (
    <main className="flex flex-col gap-8 pt-4 pb-16">
      <section className="flex gap-2">
        {tags?.map((tag) => {
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
      <TextCard title="잘했어요" content={liked} />
      <TextCard title="배웠어요" content={learned} />
      <TextCard title="부족했어요" content={lacked} />
      <TextCard title="이렇게 할 거예요" content={longedfor} />
    </main>
  );
};

export default ReviewContents;
