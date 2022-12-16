import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { getHabits } from 'lib/apis';

type Habit = {
  _id: number;
  habit: string;
};

const habitKeys = {
  all: ['habits'] as const,
  lists: () => [...habitKeys.all, 'list'] as const,
  list: (filters: string) => [...habitKeys.lists(), { filters }] as const,
};

const useHabitQuery = () => {
  const { data: habitData } = useQuery<Habit[], AxiosError>({
    queryKey: habitKeys.lists(),
    queryFn: async () => {
      const { data } = await getHabits();
      return data.habits;
    },
    suspense: true,
  });

  return habitData;
};

export default useHabitQuery;
