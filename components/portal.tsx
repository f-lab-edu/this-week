import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChildrenProps } from 'types/props';

function Portal(props: ChildrenProps) {
  const { children } = props;
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById('portal'));
  }, []);

  if (!element) {
    return <></>;
  }

  return createPortal(children, element);
}

export default Portal;
