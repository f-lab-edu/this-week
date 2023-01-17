import { BackgroundColor, TextColor } from 'queries/useReviewQuery';

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

export default TagCard;
