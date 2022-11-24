import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

type Icon = 'bars' | 'user';
type Size = '10px' | '15px' | '20px' | '25px';

const Icon = (props: { icon: Icon; size?: Size }) => {
  const { icon, size = '25px' } = props;
  return (
    <button>
      <FontAwesomeIcon
        icon={FAICONS[icon]}
        style={{ color: '#808080', height: size }}
      />
    </button>
  );
};

export default Icon;

const FAICONS = {
  bars: faBars,
  user: faUser,
};
