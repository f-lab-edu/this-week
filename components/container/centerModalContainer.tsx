import React from 'react';

import { ChildrenProps } from 'types/props';

const CenterModalContainer = ({ children }: ChildrenProps) => {
  return (
    <div className="absolute left-1/2 top-1/2 m-auto hidden w-1/3 min-w-120 -translate-y-1/2 -translate-x-1/2 rounded-lg bg-white px-12 py-5 lg:block">
      {children}
    </div>
  );
};
export default CenterModalContainer;
