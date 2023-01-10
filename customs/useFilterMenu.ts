import { useState } from 'react';

type InitialFilter = {
  initialFilter: { [key: string]: boolean };
};

const useFilterMenu = ({ initialFilter }: InitialFilter) => {
  const [selected, setSelected] = useState(initialFilter);

  const selectMenu = (menu: string) => {
    setSelected(() => {
      return { ...selected, menu: true };
    });
  };

  return { selected };
};

export default useFilterMenu;
