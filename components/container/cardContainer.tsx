import { ReactNode } from 'react';

const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <ul className="flex flex-col gap-2.5 py-6">{children}</ul>
    </main>
  );
};

export default CardContainer;
