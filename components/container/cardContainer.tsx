import { ChildrenProps } from 'types/props';

const CardContainer = ({ children }: ChildrenProps) => {
  return (
    <main>
      <ul className="flex flex-col gap-2.5 py-6">{children}</ul>
    </main>
  );
};

export default CardContainer;
