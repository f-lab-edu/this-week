import { useState, useEffect } from 'react';

const useTypingText = (content: string) => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = content;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(completionWord.length);
          setText(completionWord);
          clearInterval(typingInterval);
        }

        return result;
      });
    }, 25);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);
  return text;
};

export default useTypingText;
