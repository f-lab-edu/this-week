import axiosInstance from 'lib/axiosInstance';

import { HabitType } from 'queries/useHabitQuery';
import { Tag } from 'queries/useReviewQuery';
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
export const getTodayHabits = () =>
  axiosInstance.get<GetHabitsResponse>('/api/today');

// ----------------------------------------------
type Review = {
  id: number;
  week: number;
  month: number;
  year: number;
  liked: string;
  learned: string;
  lacked: string;
  longedfor: string;
  tag: {
    data: Tag[] | null;
  };
  rating: number;
};
type NewReview = {
  data: {
    week: number;
    month: number;
    year: number;
    liked: string;
    learned: string;
    lacked: string;
    longedfor: string;
    tag: { data: Tag[] | null };
    rating: number;
  };
};
type DeleteReview = {
  id: number;
};
export const getReviews = async (query?: string) =>
  await axiosInstance.get(`/api/reviews?${query}`);

export const createRiview = async (newReview: NewReview) =>
  await axiosInstance.post('/api/reviews', newReview);
export const updateReview = async (config: Review) => {
  return await axiosInstance.put('/api/reviews', {
    data: config,
  });
};
export const deleteReview = async (id: DeleteReview) => {
  return await axiosInstance.delete('/api/reviews', {
    data: id,
  });
};
