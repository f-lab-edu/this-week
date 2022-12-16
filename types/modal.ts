import { ReactElement } from 'react';

export type ModalStateType = {
  element: ReactElement;
  props?: { [key: string]: unknown };
};
export type ModalCloseType = {
  element: ReactElement;
};
export type ModalDispatchType = {
  open: ({ element, props }: ModalStateType) => void;
  close: ({ element }: ModalCloseType) => void;
};
