import React, { useRef, useEffect } from 'react';

import Portal from 'components/portal';
import Blur from 'components/modal/blur';
import BottomFixedContainer from 'components/container/bottomFixedContainer';
import CreateButton from 'components/button/createButton';

import useOutsideClick from 'customs/useOutsideClick';

const CreateReview = (props: { handleClick(): void }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { clicked } = useOutsideClick(modalRef);

  useEffect(() => {
    if (clicked) props.handleClick();
  }, [clicked]);

  return (
    <Portal>
      <Blur>
        <BottomFixedContainer>
          <div ref={modalRef} className="flex w-full flex-col py-5">
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
        </BottomFixedContainer>
      </Blur>
    </Portal>
  );
};

export default CreateReview;
