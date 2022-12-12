import { useEffect, useRef } from 'react';

import BottomSheetContainer from 'components/container/bottomSheetContainer';
import useOutsideClick from 'customs/useOutsideClick';
import useModal from 'customs/useModal';
import CenterModalContainer from 'components/container/centerModalContainer';
import useWindowSize from 'customs/useWindowSize';
import CreateHabitTemplate from 'components/habit/createHabitTemplate';

const CreateHabitModal = () => {
  const { type } = useWindowSize();
  const modalRef = useRef<HTMLDivElement>(null);
  const { clicked } = useOutsideClick(modalRef);
  const { closeModal } = useModal();

  useEffect(() => {
    if (clicked) closeModal({ element: <CreateHabitModal /> });
  }, [clicked]);

  return (
    <div ref={modalRef}>
      {type === 'lg' ? (
        <CenterModalContainer>
          <CreateHabitTemplate />
        </CenterModalContainer>
      ) : (
        <BottomSheetContainer>
          <CreateHabitTemplate />
        </BottomSheetContainer>
      )}
    </div>
  );
};

export default CreateHabitModal;
