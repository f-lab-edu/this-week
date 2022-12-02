import { ChildrenProps } from 'types/props';

const Blur = ({ children }: ChildrenProps) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-30 h-full animate-toggle bg-black bg-opacity-75">
      {children}
    </div>
  );
};

export default Blur;
