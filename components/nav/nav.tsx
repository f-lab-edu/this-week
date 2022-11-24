import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <nav className="flex h-12 items-center justify-between border-b border-main-border px-5">
      <button>
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: '#808080', height: '25px' }}
        />
      </button>
      <button>
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: '#808080', height: '25px' }}
        />
      </button>
    </nav>
  );
};

export default Nav;
