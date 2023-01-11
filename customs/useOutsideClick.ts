import { useEffect, RefObject } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>, closeModal: any) => {
  useEffect(() => {
    const onClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, [ref]);
};

export default useOutsideClick;
