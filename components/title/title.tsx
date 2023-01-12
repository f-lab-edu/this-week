import React from 'react';
import useTypingText from 'customs/useTypingText';

type Props = {
  text: string;
  size?: 'lg' | 'xl' | '2xl' | '3xl';
  bold?: 'medium' | 'semibold';
  line?: 0 | 16;
  typing?: boolean;
};

const Title = ({
  text,
  size = '2xl',
  bold = 'semibold',
  line = 0,
  typing = false,
}: Props) => {
  const typingText = useTypingText(text);
  return (
    <h1 className={`text-${size} font-${bold} h-${line}`}>
      <pre className="whitespace-pre-line">{typing ? typingText : text}</pre>
    </h1>
  );
};

export default Title;
