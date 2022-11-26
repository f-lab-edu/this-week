import Icon from 'components/icon/icon';
import SideTap from 'components/modal/sideTap';

import { useState } from 'react';

const Navigator = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <nav className="flex h-12 items-center justify-between border-b border-main-border px-5">
      <div onClick={() => setModal((prev) => !prev)}>
        <Icon icon="faBars"></Icon>
      </div>
      <Icon icon="faUser"></Icon>
      {modal && (
        <SideTap handleClick={() => setModal((prev) => !prev)}></SideTap>
      )}
    </nav>
  );
};

export default Navigator;
