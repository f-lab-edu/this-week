import React, { ReactNode } from 'react';

const BottomFix = ({ button }: { button: ReactNode }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-28 items-center justify-center rounded-t-lg bg-white shadow-3xl">
      <div className="w-4/5">{button}</div>
    </div>
  );
};

export default BottomFix;
