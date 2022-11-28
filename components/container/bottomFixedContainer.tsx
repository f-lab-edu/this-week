import { ReactNode } from 'react';

const BottomFixedContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 flex items-center justify-center rounded-t-lg bg-white px-6`}
    >
      {children}
    </div>
  );
};

export default BottomFixedContainer;
