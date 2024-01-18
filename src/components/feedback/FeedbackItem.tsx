import { useState } from 'react';
import type { MouseEvent } from 'react';
import { TriangleUpIcon } from '@radix-ui/react-icons';

import { TFeedbackItem } from '../../lib/types';

function FeedbackItem({
  upvoteCount,
  badgeLetter,
  company,
  text,
  daysAgo,
}: TFeedbackItem) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUpvoteCount, setCurrentUpvoteCount] = useState(upvoteCount);

  const handleItemClick = () => setIsOpen(!isOpen);
  const handleUpvoteClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.currentTarget.disabled = true;
    setCurrentUpvoteCount((_curState) => ++_curState);
  };

  return (
    <li
      onClick={handleItemClick}
      className={`feedback ${isOpen ? 'feedback--expand' : ''}`}
    >
      <button onClick={handleUpvoteClick}>
        <TriangleUpIcon />
        <span>{currentUpvoteCount}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo === 0 ? 'NEW' : `${daysAgo}d`}</p>
    </li>
  );
}

export default FeedbackItem;
