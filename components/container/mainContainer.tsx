import { ReactNode } from 'react';

const MainContainer = ({ children }: { children: ReactNode }) => {
  return <div className="p-6">{children}</div>;
};

export default MainContainer;
