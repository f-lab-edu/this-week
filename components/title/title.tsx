import React from 'react';
import useTypingText from 'customs/useTypingText';

type Props = {
  text: string;
  size?: 'lg' | 'xl' | '2xl' | '3xl';
  bold?: 'medium' | 'semibold';
};

const Title = ({ text, size = '2xl', bold = 'semibold' }: Props) => {
  const typingText = useTypingText(text);
  return (
    <h1 className={`text-${size} font-${bold} min-h-16 h-16`}>
      <pre className="whitespace-pre-line">{typingText}</pre>
    </h1>
  );
};

export default Title;
