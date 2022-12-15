import { createContext } from 'react';
import { ModalStateType, ModalDispatchType } from 'types/modal';

export const ModalStateContext = createContext<ModalStateType | null>(null);
export const ModalDispatchContext = createContext<ModalDispatchType>({
  open: () => {},
  close: () => {},
});
