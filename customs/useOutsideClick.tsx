import { useEffect, useState, MouseEvent, RefObject } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const onClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        setClicked(true);
      }
    };

    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, [ref]);

  return { clicked };
};

export default useOutsideClick;
