import React from 'react';

import { ChildrenProps } from 'types/props';

const CenterModalContainer = ({ children }: ChildrenProps) => {
  return (
    <div className="absolute left-1/2 top-1/2 m-auto flex min-w-full -translate-y-1/2 -translate-x-1/2 justify-center">
      {children}
    </div>
  );
};
export default CenterModalContainer;
