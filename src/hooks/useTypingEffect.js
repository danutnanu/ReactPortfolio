import { useState, useEffect } from 'react';

function useTypingEffect(text, speed = 100) {
  const [displayedText, setDisplayedText] = useState(text.charAt(0));
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && index <= text.length) {
        setDisplayedText(text.substring(0, index));
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 1) {
        setDisplayedText(text.substring(0, index - 1));
        setIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, speed, index, isDeleting]);

  return displayedText;
}

export default useTypingEffect;
