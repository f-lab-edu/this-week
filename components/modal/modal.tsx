import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalDispatchContext,
  ModalStateContext,
} from 'contexts/modalProvider';
import Dim from 'components/modal/dim';

const Modal = () => {
  const openedModal = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);

  if (openedModal)
    return createPortal(<Dim>{openedModal.element}</Dim>, document.body);
  return <></>;
};

export default Modal;
