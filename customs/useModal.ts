import React, { useContext, ReactPortal, ReactElement } from 'react';
import { ModalDispatchContext } from 'contexts/modalProvider';

export default function useModal() {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = (
    Component: ReactElement,
    props: { [key: string]: unknown },
  ) => {
    open(Component, props);
  };

  const closeModal = (Component: ReactElement) => {
    close(Component);
  };

  return {
    openModal,
    closeModal,
  };
}
