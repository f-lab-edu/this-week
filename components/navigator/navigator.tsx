import Icon from 'components/icon/icon';
import Portal from 'components/portal';
import Blur from 'components/modal/blur';

import { useState } from 'react';

const Navigator = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <nav className="flex h-12 items-center justify-between border-b border-main-border px-5">
      <div onClick={() => setModal((prev) => !prev)}>
        <Icon icon="bars"></Icon>
      </div>
      <Icon icon="user"></Icon>
      {modal && (
        <Portal>
          <Blur>
            <div className="flex h-full w-3/5 items-center justify-center rounded-tr-lg rounded-br-lg bg-white"></div>
          </Blur>
        </Portal>
      )}
    </nav>
  );
};

export default Navigator;
