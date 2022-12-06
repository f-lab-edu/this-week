import React, { useContext } from 'react';
import {
  ModalDispatchContext,
  ModalStateContext,
} from 'contexts/modalProvider';

const Modal = () => {
  const openedModal = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);

  return (
    <>
      {openedModal.map((modal, index) => {
        const { Component, props } = modal;
        const { onSubmit, ...restProps } = props;
        const onClose = () => {
          close(Component);
        };

        const handleSubmit = async () => {
          if (typeof onSubmit === 'function') {
            await onSubmit();
          }
        };

        return (
          <Component
            {...restProps}
            key={index}
            onClose={onClose}
            onSubmit={handleSubmit}
          />
        );
      })}
    </>
  );
};

export default Modal;
