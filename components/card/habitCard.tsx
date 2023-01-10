import Checkbox from 'components/button/checkbox';
import useHabitCardClick from 'customs/useHabitCardClick';
import Dots from 'components/svgs/dots.svg';
import useModal from 'customs/useModal';
import UpdateHabitModal from 'components/modal/updateHabitModal';

type Props = {
  content: string;
  id: string;
};

const HabitCard = ({ content = '선택된 습관이 없습니다.', id }: Props) => {
  const { checkedBox, checkedDots, onClickCheckbox, onClickDots } =
    useHabitCardClick();
  const { openModal } = useModal();

  return (
    <>
      <li
        className={`flex flex-col items-center justify-between gap-4 rounded-lg bg-main-beige px-3.5 py-2 lg:w-120 lg:py-3 ${
          checkedBox ? 'line-through opacity-40' : ''
        }`}
      >
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-5">
            <Checkbox checked={checkedBox} onClick={onClickCheckbox} />
            <p>{content}</p>
          </div>
          <Dots onClick={onClickDots} width="20px" fill="lightgray" />
        </div>
        {checkedDots && !checkedBox && (
          <div className="flex w-full justify-end gap-2 text-sm">
            <button
              className="rounded bg-white py-1 px-2"
              onClick={() =>
                openModal({
                  element: <UpdateHabitModal content={content} id={id} />,
                })
              }
            >
              수정
            </button>
            <button
              className="rounded bg-white py-1 px-2"
              // onClick={() => mutate({ id })}
            >
              삭제
            </button>
          </div>
        )}
      </li>
    </>
  );
};

export default HabitCard;
