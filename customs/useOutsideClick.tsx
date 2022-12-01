import { useEffect, useState } from 'react';

const useOutsideClick = (ref: any) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setClicked(true);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref]);

  return { clicked };
};

export default useOutsideClick;
