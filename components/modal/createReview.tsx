import { useEffect, useRef } from 'react';

import BottomSheetContainer from 'components/container/bottomSheetContainer';
import useOutsideClick from 'customs/useOutsideClick';
import useModal from 'customs/useModal';
import CenterModalContainer from 'components/container/centerModalContainer';
import useWindowSize from 'customs/useWindowSize';
import CreateButton from 'components/button/createButton';

const CreateReview = () => {
  const { type } = useWindowSize();
  const modalRef = useRef<HTMLDivElement>(null);
  const { clicked } = useOutsideClick(modalRef);
  const { closeModal } = useModal();

  useEffect(() => {
    if (clicked) closeModal({ element: <CreateReview /> });
  }, [clicked]);

  return (
    <div ref={modalRef}>
      {type === 'lg' ? (
        <CenterModalContainer>
          <div className="flex w-full flex-col py-5">
            <section className="w-full pb-5">
              <h2 className="py-2 text-xl">제목</h2>
              <input
                placeholder="이건 잘했어요"
                className="w-full rounded-lg border-2 p-2 outline-none"
              ></input>
            </section>
            <section className="w-full pb-10">
              <h2 className="py-2 text-xl">내용</h2>
              <textarea
                placeholder="습관을 전부 지켰어요"
                className="h-48 w-full rounded-lg border-2 px-2 py-3 outline-none"
              ></textarea>
            </section>
            <CreateButton
              onClick={() => closeModal({ element: <CreateReview /> })}
              text="회고 추가하기"
            ></CreateButton>
          </div>
        </CenterModalContainer>
      ) : (
        <BottomSheetContainer>
          <div className="flex w-full flex-col py-5">
            <section className="w-full pb-5">
              <h2 className="py-2 text-xl">제목</h2>
              <input
                placeholder="이건 잘했어요"
                className="w-full rounded-lg border-2 p-2 outline-none"
              ></input>
            </section>
            <section className="w-full pb-10">
              <h2 className="py-2 text-xl">내용</h2>
              <textarea
                placeholder="습관을 전부 지켰어요"
                className="h-48 w-full rounded-lg border-2 px-2 py-3 outline-none"
              ></textarea>
            </section>
            <CreateButton text="회고 추가하기"></CreateButton>
          </div>
        </BottomSheetContainer>
      )}
    </div>
  );
};

export default CreateReview;
