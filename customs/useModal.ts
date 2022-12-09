import React, { useContext, ReactElement } from 'react';
import { ModalDispatchContext } from 'contexts/modalProvider';

export default function useModal() {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = ({
    element,
    props,
  }: {
    element: ReactElement;
    props: { [key: string]: unknown };
  }) => {
    open({ element, props });
  };

  const closeModal = ({ element }: { element: ReactElement }) => {
    close({ element });
  };

  return {
    openModal,
    closeModal,
  };
}
