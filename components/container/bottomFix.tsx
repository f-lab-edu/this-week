import React, { ReactNode } from 'react';

const BottomFix = ({ button }: { button: ReactNode }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-28 items-center justify-center">
      <div className="w-4/5">{button}</div>
    </div>
  );
};

export default BottomFix;
