import { ChildrenProps } from 'types/props';

const HeaderContainer = ({ children }: ChildrenProps) => {
  return <header className="flex flex-col gap-5">{children}</header>;
};

export default HeaderContainer;
