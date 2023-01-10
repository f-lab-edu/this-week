import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { getReviews, createRiview, deleteReview, updateReview } from 'lib/apis';

export const reviewKeys = {
  review: ['review'] as const,
  reviews: ['reviews'] as const,
};

// Todo: OAS
export type ReviewType = {
  id: number;
  attributes: {
    week: string;
    liked: string;
    learned: string;
    lacked: string;
    longedfor: string;
    tag: {
      data: string[] | null;
    };
    rating: number;
    publishedAt: string;
    updatedAt: string;
  };
};

export type DeleteHabitType = {
  id: number;
};

export type UpdateConfigType = {
  id: number;
  week: string;
  liked: string;
  learned: string;
  lacked: string;
  longedfor: string;
  tag: {
    data: string[] | null;
  };
  rating: number;
  publishedAt: string;
  updatedAt: string;
};

const useGetReviewsQuery = () => {
  const { data: reviewData } = useQuery<ReviewType[], AxiosError>(
    reviewKeys.reviews,
    async () => {
      const { data } = await getReviews();
      return data.data;
    },
    {
      suspense: true,
    },
  );
  return reviewData;
};

export default useGetReviewsQuery;

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
