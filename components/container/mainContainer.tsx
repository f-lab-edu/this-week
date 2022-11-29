import { ChildrenProps } from 'types/props';

const MainContainer = ({ children }: ChildrenProps) => {
  return <div className="p-6">{children}</div>;
};

export default MainContainer;
