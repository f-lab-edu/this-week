import { useContext } from 'react';
import { ModalDispatchContext } from 'contexts/modalContext';
import { ModalStateType, ModalCloseType } from 'types/modal';

export default function useModal() {
  const { open, close } = useContext(ModalDispatchContext);
  const openModal = (props: ModalStateType) => open({ ...props });
  const closeModal = ({ element }: ModalCloseType) => close({ element });
  return {
    openModal,
    closeModal,
  };
}
