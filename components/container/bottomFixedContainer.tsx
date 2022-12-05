import { ChildrenProps } from 'types/props';

const BottomFixedContainer = ({ children }: ChildrenProps) => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center rounded-t-lg bg-white px-6 lg:hidden">
        {children}
      </div>
      <div className="fixed left-0 right-0 m-auto hidden w-120 translate-y-1/2 rounded-lg bg-white px-12 py-5 lg:block">
        {children}
      </div>
    </>
  );
};

export default BottomFixedContainer;
