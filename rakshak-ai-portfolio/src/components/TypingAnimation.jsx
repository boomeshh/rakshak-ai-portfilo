/**
 * TypingAnimation — cycles through an array of words with a typewriter effect.
 * A blinking cursor is rendered using Tailwind's animate-pulse utility.
 *
 * Requirements: 3.1
 */

import useTypingAnimation from '../hooks/useTypingAnimation';

const TypingAnimation = ({ words = [], speed = 100, className = '' }) => {
  const { displayText } = useTypingAnimation(words, speed);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
