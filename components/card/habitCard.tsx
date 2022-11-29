import Checkbox from '@mui/joy/Checkbox';
import useHabitCardClick from 'customs/useHabitCardClick';
// import Icon from 'components/icon/icon';

type Props = {
  content: string;
};

const HabitCard = ({ content = '선택된 습관이 없습니다.' }: Props) => {
  const { checked, method } = useHabitCardClick();

  return (
    <li
      className={`flex h-10 items-center justify-between rounded-lg bg-main-beige px-3.5 ${
        checked ? 'line-through opacity-40' : ''
      }`}
      {...method}
    >
      <div className="flex items-center gap-5">
        <Checkbox
          size="lg"
          checked={checked}
          sx={{
            backgroundColor: '#D341571A',
            borderRadius: '50%',
            color: 'transparent',
            '&.Joy-checked': {
              color: '#AAAAAA',
            },
          }}
        />
        <p>{content}</p>
      </div>
      {/* <Icon icon="faEllipsis" size="20px" /> */}
    </li>
  );
};

export default HabitCard;
