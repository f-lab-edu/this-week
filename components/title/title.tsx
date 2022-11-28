import React from 'react';

type TextTemplate = {
  [k: number]: string;
};

const Title = ({ text }: { text: TextTemplate }) => {
  return (
    <h1 className="text-2xl font-semibold">
      <pre className="whitespace-pre-line">{text[0]}</pre>
    </h1>
  );
};

export default Title;
