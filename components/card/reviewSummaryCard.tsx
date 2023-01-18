import React from 'react';

type ReviewSummaryCardProps = {
  id: number;
  year: number;
  month: number;
  week: number;
  liked: string;
};

const ReviewSummaryCard = ({
  id,
  year,
  month,
  week,
  liked,
}: ReviewSummaryCardProps) => {
  return (
    <li
      key={id}
      className="flex w-full flex-col gap-4 rounded-lg bg-main-beige p-4 hover:scale-105"
    >
      <p className="font-semibold">{`${year}년 ${month}월 ${week}주차 회고`}</p>
      <div className="text-lg">{liked}</div>
    </li>
  );
};

export default ReviewSummaryCard;
