import React from 'react';

type TextTemplate = {
  [k: number]: string;
};
type Props = {
  text: TextTemplate;
};

const Title = ({ text }: Props) => {
  return (
    <h1 className="text-2xl font-semibold">
      <pre className="whitespace-pre-line">{text[0]}</pre>
    </h1>
  );
};

export default Title;
