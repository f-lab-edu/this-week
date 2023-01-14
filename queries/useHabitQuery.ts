import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { getHabits, createHabit, deleteHabit, updateHabit } from 'lib/apis';
import { getDayShortForm } from 'lib/date';

type RepeatDow = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export type HabitType = {
  _id: string;
  habit: string;
  repeatDow: RepeatDow[];
};
export type CreateHabitType = {
  habit: string;
  repeatDow: RepeatDow[];
};
export type DeleteHabitType = {
  id: string;
};
export type UpdateConfigType = {
  id: string;
  habit: string;
  repeatDow: RepeatDow[];
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
    {
      suspense: true,
    },
  );
  return habitData;
};
export default useGetHabitQuery;

export const useGetTodayHabitQuery = () => {
  const { data: habitData } = useQuery<HabitType[], AxiosError>(
    habitKeys.habits,
    async () => {
      const { data } = await getHabits();
      return data.habits;
    },
    {
      suspense: true,
      select: (habits) =>
        habits.filter((habit) => habit.repeatDow.includes(getDayShortForm())),
    },
  );
  return habitData;
};

export const useCreateHabitMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(createHabit, {
    onSuccess: () => {
      queryClient.invalidateQueries(habitKeys.habits);
    },
  });
};

export const useDeleteHabitMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((id: DeleteHabitType) => deleteHabit(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(habitKeys.habits);
    },
  });
};

export const useUpdateHabitMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((config: UpdateConfigType) => updateHabit(config), {
    onSuccess: () => {
      queryClient.invalidateQueries(habitKeys.habits);
    },
    onMutate: () => {
      console.log('loading...');
    },
  });
};
