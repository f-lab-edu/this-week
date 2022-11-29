import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChildrenProps } from 'types/props';

const Portal = ({ children }: ChildrenProps) => {
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
