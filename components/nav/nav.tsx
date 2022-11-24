import React from 'react';
import Icon from '../icon';

const Nav = () => {
  return (
    <nav className="flex h-12 items-center justify-between border-b border-main-border px-5">
      <Icon icon="bars"></Icon>
      <Icon icon="user"></Icon>
    </nav>
  );
};

export default Nav;
