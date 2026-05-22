import { useState, useEffect, useRef } from 'react';

/**
 * Cycles through an array of words with a character-by-character typing and
 * deleting animation effect.
 * @param {string[]} words - Array of words to cycle through
 * @param {number} speed - Typing/deleting speed in milliseconds (default 100)
 * @returns {{ displayText: string, isTyping: boolean }}
 */
function useTypingAnimation(words = [], speed = 100) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Use refs to avoid stale closures inside setTimeout callbacks
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!words.length) return;

    const tick = () => {
      const currentWord = words[wordIndexRef.current];
      const isDeleting = isDeletingRef.current;

      if (isDeleting) {
        // Remove one character
        charIndexRef.current -= 1;
        setDisplayText(currentWord.slice(0, charIndexRef.current));
        setIsTyping(false);

        if (charIndexRef.current === 0) {
          // Move to next word
          isDeletingRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
          setIsTyping(true);
          timeoutRef.current = setTimeout(tick, speed * 2); // brief pause before typing next
          return;
        }
      } else {
        // Add one character
        charIndexRef.current += 1;
        setDisplayText(currentWord.slice(0, charIndexRef.current));
        setIsTyping(true);

        if (charIndexRef.current === currentWord.length) {
          // Word fully typed — pause then start deleting
          isDeletingRef.current = true;
          timeoutRef.current = setTimeout(tick, speed * 15); // hold pause
          return;
        }
      }

      timeoutRef.current = setTimeout(tick, speed);
    };

    timeoutRef.current = setTimeout(tick, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  // Re-run only when words array reference or speed changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, speed]);

  return { displayText, isTyping };
}

export default useTypingAnimation;
