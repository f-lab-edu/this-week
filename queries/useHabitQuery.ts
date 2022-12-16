import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { getHabits, createHabit, deleteHabit } from 'lib/apis';

export type HabitType = {
  _id: number;
  habit: string;
};
export type CreateHabitType = {
  habit: string;
};
export type DeleteHabitType = {
  id: string;
};

export const habitKeys = {
  habit: ['habit'] as const,
  habits: ['habits'] as const,
};
const useGetHabitQuery = () => {
  const { data: habitData } = useQuery<HabitType[], AxiosError>(
    habitKeys.habits,
    async () => {
      const { data } = await getHabits();
      return data.habits;
    },
    { suspense: true },
  );
  return habitData;
};
export default useGetHabitQuery;

export const useCreateHabitMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(createHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(habitKeys.habits);
    },
  });
};

export const useDeleteHabitMutation = () => {
  return useMutation((id: DeleteHabitType) => deleteHabit(id));
};
