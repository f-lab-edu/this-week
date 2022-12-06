import React from 'react';
import { createPortal } from 'react-dom';

import { ChildrenProps } from 'types/props';

import Blur from 'components/modal/blur';

const CenterModal = ({ children }: ChildrenProps) => {
  return createPortal(
    <Blur>
      <div className="fixed left-0 right-0 m-auto hidden translate-y-1/2 rounded-lg bg-white lg:block">
        {children}
      </div>
    </Blur>,
    document.body,
  );
};

export default CenterModal;
