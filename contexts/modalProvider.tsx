import React, { useState, createContext, ReactElement } from 'react';

type ModalProviderProps = {
  children: ReactElement | ReactElement[];
};

export const ModalDispatchContext = createContext<{
  open: (Component: ReactElement, props: { [key: string]: unknown }) => void;
  close: (Component: ReactElement) => void;
}>({
  open: () => {
    return;
  },
  close: () => {
    return;
  },
});

type ModalStateType = {
  Component: ReactElement;
  props: { [key: string]: unknown };
};

export const ModalStateContext = createContext<ModalStateType[]>([]);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [openedModal, setOpenedModal] = useState<ModalStateType[]>([]);

  const open = (Component: ReactElement, props: { [key: string]: unknown }) => {
    setOpenedModal((modal) => {
      return [...modal, { Component, props }];
    });
  };

  const close = (Component: ReactElement) => {
    setOpenedModal((modal) => {
      return modal.filter((modal) => modal.Component !== Component);
    });
  };

  const dispatch = { open, close };

  return (
    <ModalStateContext.Provider value={openedModal}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export default ModalProvider;
