import React from 'react';
import { useRouter } from 'next/router';

const ErrorAlert = ({ reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <p className="text-sm">이전 페이지</p>
        </button>
        <button
          onClick={() => reset()}
          className="rounded p-1 text-xs text-white"
        >
          새로고침
        </button>
      </div>
      <p className="text-xl">문제가 생겼어요. 😭</p>
    </div>
  );
};

export default ErrorAlert;
