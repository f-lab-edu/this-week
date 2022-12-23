import { useEffect, useRef } from 'react';

import BottomSheetContainer from 'components/container/bottomSheetContainer';
import useOutsideClick from 'customs/useOutsideClick';
import useModal from 'customs/useModal';
import CenterModalContainer from 'components/container/centerModalContainer';
import useWindowSize from 'customs/useWindowSize';
import UpdateHabitTemplate from 'components/habit/updateHabitTemplate';

type Props = {
  content: string;
  id: string;
};

const UpdateHabitModal = ({ content, id }: Props) => {
  const { type } = useWindowSize();
  const modalRef = useRef<HTMLDivElement>(null);
  const { clicked } = useOutsideClick(modalRef);
  const { closeModal } = useModal();

  useEffect(() => {
    if (clicked)
      closeModal({ element: <UpdateHabitModal content={content} id={id} /> });
  }, [clicked]);

  return (
    <div ref={modalRef}>
      {type === 'lg' ? (
        <CenterModalContainer>
          <UpdateHabitTemplate content={content} id={id} />
        </CenterModalContainer>
      ) : (
        <BottomSheetContainer>
          <UpdateHabitTemplate content={content} id={id} />
        </BottomSheetContainer>
      )}
    </div>
  );
};

export default UpdateHabitModal;
