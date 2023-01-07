import { ChildrenProps } from 'types/props';

const MainContainer = ({ children }: ChildrenProps) => {
  return <div className="mt-12">{children}</div>;
};

export default MainContainer;
