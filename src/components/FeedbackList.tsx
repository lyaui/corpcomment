import { useState, useEffect } from 'react';

import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import FeedbackItem, { type TFeedbackItem } from './FeedbackItem';

// const feedbackItems = [
//   {
//     upvoteCnt: 123,
//     badgeLetter: 'B',
//     companyName: 'Nike',
//     text: 'hello',
//     daysAgo: 5,
//   },
//   {
//     upvoteCnt: 143,
//     badgeLetter: 'O',
//     companyName: 'Apple',
//     text: 'hellohellohellohellohello',
//     daysAgo: 15,
//   },
// ];

function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          ' https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
        );

        if (!res.ok) throw new Error();
        const data = await res.json();
        setFeedbackItems(data.feedbacks);
      } catch {
        setErrorMsg('something went wrong.');
      }
      setIsLoading(false);
    };
    fetchFeedbackItems();
  }, []);

  return (
    <ol className='feedback-list'>
      {isLoading && <Spinner />}
      {errorMsg && <ErrorMessage message={errorMsg} />}
      {feedbackItems.map((_item) => (
        <FeedbackItem key={_item.id} {..._item} />
      ))}
    </ol>
  );
}

export default FeedbackList;
