import { useState } from 'react';
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
  return (
    <li
      onClick={() => setIsOpen(!isOpen)}
      className={`feedback ${isOpen ? 'feedback--expand' : ''}`}
    >
      <button>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
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
