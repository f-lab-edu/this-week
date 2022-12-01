import { useRef, useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(<>{children}</>, ref.current)
    : null;
};

export default Portal;
