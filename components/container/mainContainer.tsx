import { ChildrenProps } from 'types/props';

const MainContainer = ({ children }: ChildrenProps) => {
  return <div className="mt-12 p-6">{children}</div>;
};

export default MainContainer;
