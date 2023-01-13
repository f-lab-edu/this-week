import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { getReviews, createRiview, deleteReview, updateReview } from 'lib/apis';
import {
  getWeek,
  getYear,
  getYearOfLastMonth,
  getLastMonth,
  getYearOfLastWeek,
  getLastWeek,
} from 'lib/date';

export const reviewKeys = {
  review: ['review'] as const,
  reviews: ['reviews'] as const,
  lastMonthReviews: ['lastMonthReviews'],
  lastWeekReview: ['lastWeekReviews'],
};

export type BackgroundColor = 'main-pink-10' | 'main-red-10' | 'main-blue-10';
export type TextColor = 'main-pink' | 'main-red' | 'main-blue';
export type Tag = {
  id: number;
  name: string;
  color: {
    text: TextColor;
    bg: BackgroundColor;
  };
};

// Todo: OAS
export type ReviewType = {
  id: number;
  attributes: {
    week: number;
    month: number;
    year: number;
    liked: string;
    learned: string;
    lacked: string;
    longedfor: string;
    tag: { data: Tag[] | null };
  };
  rating: number;
  publishedAt: string;
  updatedAt: string;
};

export type DeleteHabitType = {
  id: number;
};

export type UpdateConfigType = {
  id: number;
  week: number;
  month: number;
  year: number;
  liked: string;
  learned: string;
  lacked: string;
  longedfor: string;
  tag: { data: Tag[] | null };
  rating: number;
  publishedAt: string;
  updatedAt: string;
};

interface GetReviewsQueryProps {
  recent?: number;
}

const useGetReviewsQuery = (
  { recent = 0 }: GetReviewsQueryProps = { recent: 0 },
) => {
  const { data: reviews, isSuccess } = useQuery<ReviewType[], AxiosError>(
    reviewKeys.reviews,
    async () => {
      const { data } = await getReviews();
      return recent > 0 ? data.data.slice(-recent) : data.data;
    },
    {
      suspense: true,
    },
  );
  const isExist = isSuccess && reviews && reviews.length > 0;
  return { reviews, isExist };
};

export default useGetReviewsQuery;

export const useGetLastMonthReviewQuery = () => {
  const { data: lastMonthReviews, isSuccess } = useQuery<
    ReviewType[],
    AxiosError
  >(
    reviewKeys.lastMonthReviews,
    async () => {
      const query = `filters[month][$eq]=${getLastMonth}&filters[year][$eq]=${getYearOfLastMonth}`;
      const { data } = await getReviews(query);
      return data.data;
    },
    {
      suspense: true,
    },
  );
  const isExist = isSuccess && lastMonthReviews && lastMonthReviews.length > 0;
  return { lastMonthReviews, isExist };
};

export const useGetLastWeekReviewQuery = () => {
  const { data: lastWeekReview, isSuccess } = useQuery<
    ReviewType[],
    AxiosError
  >(
    reviewKeys.lastWeekReview,
    async () => {
      const query = `filters[week][$eq]=${getLastWeek}&filters[year][$eq]=${getYearOfLastWeek}`;
      const { data } = await getReviews(query);
      return data.data;
    },
    {
      suspense: true,
    },
  );
  const isExist = isSuccess && lastWeekReview && lastWeekReview.length > 0;
  return { lastWeekReview, isSuccess, isExist };
};

export const useGetThisWeekReviewQuery = () => {
  const { data: thisWeekReview, isSuccess } = useQuery<
    ReviewType[],
    AxiosError
  >(
    reviewKeys.review,
    async () => {
      const query = `filters[week][$eq]=${getWeek}&filters[year][$eq]=${getYear}`;
      const { data } = await getReviews(query);
      return data.data;
    },
    {
      suspense: true,
    },
  );
  const isExist = isSuccess && thisWeekReview && thisWeekReview.length > 0;
  return { thisWeekReview, isSuccess, isExist };
};

export const useCreateReviewMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(createRiview, {
    onSuccess: () => {
      queryClient.invalidateQueries(reviewKeys.reviews);
    },
  });
};

export const useDeleteReviewMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((id: DeleteHabitType) => deleteReview(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(reviewKeys.reviews);
    },
  });
};

export const useUpdateHabitMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((config: UpdateConfigType) => updateReview(config), {
    onSuccess: () => {
      queryClient.invalidateQueries(reviewKeys.reviews);
    },
    onMutate: () => {
      console.log('loading...');
    },
  });
};
