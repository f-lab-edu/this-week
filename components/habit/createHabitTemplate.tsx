import CreateButton from 'components/button/createButton';
import DayCheckButton from 'components/button/dayCheckButton';
import useModal from 'customs/useModal';
import CreateHabitModal from 'components/modal/createHabitModal';
import useCreateHabit from 'customs/useCreateHabit';
import { useCreateReviewMutation } from 'queries/useReviewQuery';
type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

const CreateHabitTemplate = () => {
  const { habitName, checkedDay, handleCheckedDay, handleHabitName } =
    useCreateHabit();
  const { closeModal } = useModal();
  const { mutate } = useCreateReviewMutation();

  return (
    <div className="flex w-full flex-col gap-8 py-6">
      <div>
        <p className="pb-2 text-xl">습관 이름</p>
        <div className="border-b">
          <input
            value={habitName}
            onChange={(event) => handleHabitName(event.target.value)}
            placeholder="습관 이름을 입력하세요."
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
              checked={checkedDay.includes(day)}
              onClick={() => handleCheckedDay(day)}
            />
          ))}
        </div>
      </div>
      <CreateButton
        text="습관 추가하기"
        onClick={() => {
          mutate({
            data: {
              week: '2023/3',
              liked: '하하',
              learned: '호호',
              lacked: '히히',
              longedfor: '허허',
              tag: null,
              rating: 5,
            },
          });
          closeModal({ element: <CreateHabitModal /> });
        }}
      />
    </div>
  );
};

export default CreateHabitTemplate;

const WEEK: DayOfWeek[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
