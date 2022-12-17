import CreateButton from 'components/button/createButton';
import DayCheckButton from 'components/button/dayCheckButton';
import useModal from 'customs/useModal';
import UpdateHabitModal from 'components/modal/updateHabitModal';
import useUpdateHabit from 'customs/useUpdateHabit';
import { useUpdateHabitMutation } from 'queries/useHabitQuery';
type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

type Props = {
  content: string;
  id: string;
};

const UpdateHabitTemplate = ({ content, id }: Props) => {
  const { habitName, checkedDay, handleCheckedDay, handleHabitName } =
    useUpdateHabit({ content });
  const { closeModal } = useModal();
  const { mutate } = useUpdateHabitMutation();

  return (
    <div className="flex w-full flex-col gap-8 py-6">
      <div>
        <p className="pb-2 text-xl">습관 이름</p>
        <div className="border-b">
          <input
            value={habitName}
            onChange={(event) => handleHabitName(event.target.value)}
            className="h-10 w-full text-lg outline-none"
          />
        </div>
      </div>
      <div className="pb-4">
        <p className="pb-2 text-xl">반복 요일</p>
        <div className="flex justify-between">
          {WEEK.map((day: DayOfWeek) => (
            <DayCheckButton
              key={day}
              dayOfWeek={day}
              checked={checkedDay[day]}
              onClick={() => handleCheckedDay(day)}
            />
          ))}
        </div>
      </div>
      <CreateButton
        text="습관 추가하기"
        onClick={() => {
          mutate({ habit: habitName, id });
          closeModal({
            element: <UpdateHabitModal content={content} id={id} />,
          });
        }}
      />
    </div>
  );
};

export default UpdateHabitTemplate;

const WEEK: DayOfWeek[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
