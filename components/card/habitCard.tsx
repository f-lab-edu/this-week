import { useState } from 'react';
import Checkbox from '@mui/joy/Checkbox';
// import Icon from 'components/icon/icon';

const HabitCard = (props: { content: string }) => {
  const { content = '선택된 습관이 없습니다.' } = props;
  const [checked, setChecked] = useState(false);
  return (
    <li
      className={`flex h-10 items-center justify-between rounded-lg ${
        checked ? 'bg-main-beige line-through opacity-40' : 'bg-main-beige'
      } px-3.5`}
      onClick={() => setChecked((prev) => !prev)}
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
