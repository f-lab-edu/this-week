import SideTap from 'components/modal/sideTap';
import Bars from 'components/svgs/bars.svg';
import User from 'components/svgs/user.svg';

import { useState } from 'react';

const Navigator = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <nav className="flex h-12 items-center justify-between border-b border-main-border px-5">
      <button onClick={() => setModal((prev) => !prev)}>
        <Bars width="25px" height="25px" fill="#808080" />
      </button>
      <User width="25px" height="25px" fill="#808080" />
      {modal && (
        <SideTap handleClick={() => setModal((prev) => !prev)}></SideTap>
      )}
    </nav>
  );
};

export default Navigator;
