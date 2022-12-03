import React from 'react';

type Props = {
  text: string;
  size?: 'lg' | 'xl' | '2xl' | '3xl';
  bold?: 'medium' | 'semibold';
};

const Title = ({ text, size = '2xl', bold = 'semibold' }: Props) => {
  return (
    <h1 className={`text-${size} font-${bold}`}>
      <pre className="whitespace-pre-line">{text}</pre>
    </h1>
  );
};

export default Title;
