import { useEffect, useRef } from 'react';

import useOutsideClick from 'customs/useOutsideClick';
import useModal from 'customs/useModal';

import CenterModalContainer from 'components/container/centerModalContainer';
import { useRouter } from 'next/router';

const ReviewCheckModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { clicked } = useOutsideClick(modalRef);
  const { closeModal } = useModal();
  const router = useRouter();

  useEffect(() => {
    if (clicked) closeModal({ element: <ReviewCheckModal /> });
  }, [clicked]);

  return (
    <div ref={modalRef}>
      <CenterModalContainer>
        <div className=" flex w-4/5 flex-col rounded-lg bg-white py-8 px-6">
          <div className="flex flex-col items-center pb-5 text-lg font-medium">
            <p>아직 이번주가 끝나지 않았어요.</p>
            <p>미리 회고를 작성하시겠어요?</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => closeModal({ element: <ReviewCheckModal /> })}
              className="w-full rounded-xl border-black bg-main-red px-6 py-3 text-white"
            >
              취소
            </button>
            <button
              onClick={() => {
                router.push('/manage/review');
                closeModal({ element: <ReviewCheckModal /> });
              }}
              className="w-full rounded-xl border-black bg-main-blue px-6 py-3 text-white"
            >
              확인
            </button>
          </div>
        </div>
      </CenterModalContainer>
    </div>
  );
};

export default ReviewCheckModal;
