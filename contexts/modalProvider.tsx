import React, { useState, createContext, ReactElement } from 'react';

type ModalProviderProps = {
  children: ReactElement;
};

type ModalStateType = {
  element: ReactElement;
  props: { [key: string]: unknown };
};

type ModalCloseType = {
  element: ReactElement;
};

type ModalDispatchContextType = {
  open: ({ element, props }: ModalStateType) => void;
  close: ({ element }: ModalCloseType) => void;
};

export const ModalDispatchContext = createContext<ModalDispatchContextType>({
  open: () => {
    return;
  },
  close: () => {
    return;
  },
});

export const ModalStateContext = createContext<ModalStateType | null>(null);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [openedModal, setOpenedModal] = useState<ModalStateType | null>(null);

  const open = ({ element, props }: ModalStateType) => {
    setOpenedModal({ element, props });
  };

  const close = () => {
    setOpenedModal(null);
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
