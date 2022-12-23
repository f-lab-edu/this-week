import axiosInstance from 'lib/axiosInstance';

import { HabitType } from 'queries/useHabitQuery';
type RepeatDow = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

interface GetHabitsResponse {
  habits: HabitType[];
  repeatDow: RepeatDow[];
}

interface CreateHabitsResponse {
  habits: HabitType[];
  repeatDow: RepeatDow[];
}

export const getHabits = () =>
  axiosInstance.get<GetHabitsResponse>('/api/habits');
export const createHabit = async (newHabit: {
  habit: string;
  repeatDow: RepeatDow[];
}) => await axiosInstance.post<CreateHabitsResponse>('/api/habits', newHabit);
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
