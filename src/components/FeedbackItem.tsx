import { TriangleUpIcon } from '@radix-ui/react-icons';

export type TFeedbackItem = {
  id: number;
  upvoteCnt: number;
  badgeLetter: string;
  companyName: string;
  text: string;
  daysAgo: number;
};

function FeedbackItem({
  upvoteCnt,
  badgeLetter,
  companyName,
  text,
  daysAgo,
}: TFeedbackItem) {
  return (
    <li className='feedback'>
      <button>
        <TriangleUpIcon />
        <span>{upvoteCnt}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{companyName}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo}</p>
    </li>
  );
}

export default FeedbackItem;
