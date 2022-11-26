import Icon from 'components/icon/icon';

const HabitCard = (props: { content: string }) => {
  const { content = '선택된 습관이 없습니다.' } = props;
  return (
    <div className="flex h-10 items-center justify-between rounded-lg bg-main-beige px-3.5">
      <div className="flex items-center gap-5">
        <span className="h-6 w-6 rounded-full bg-main-red-10"></span>
        <p>{content}</p>
      </div>
      <Icon icon="faEllipsis" size="20px" />
    </div>
  );
};

export default HabitCard;
