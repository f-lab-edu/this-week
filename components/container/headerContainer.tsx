import { ReactNode } from 'react';

const HeaderContainer = ({ children }: { children: ReactNode }) => {
  return <header className="flex flex-col gap-5">{children}</header>;
};

export default HeaderContainer;
