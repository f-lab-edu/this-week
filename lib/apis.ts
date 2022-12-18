import axiosInstance from 'lib/axiosInstance';

import { HabitType } from 'queries/useHabitQuery';

interface GetHabitsResponse {
  habits: HabitType[];
}

export const getHabits = () =>
  axiosInstance.get<GetHabitsResponse>('/api/habits');
export const createHabit = async (newHabit: { habit: string }) =>
  await axiosInstance.post<HabitType>('/api/habits', newHabit);
export const updateHabit = async (config: { id: string; habit: string }) => {
  return await axiosInstance.put<HabitType>('/api/habits', {
    data: config,
  });
};
export const deleteHabit = async (id: { id: string }) => {
  return await axiosInstance.delete<HabitType>('/api/habits', {
    data: id,
  });
};
