import { ChildrenProps } from 'types/props';

const MainContainer = ({ children }: ChildrenProps) => {
  return <div className="h-full px-6 py-16">{children}</div>;
};

export default MainContainer;
