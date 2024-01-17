import FeedbackItem from './FeedbackItem';

const feedbackItems = [
  {
    upvoteCnt: 123,
    badgeLetter: 'B',
    companyName: 'Nike',
    text: 'hello',
    daysAgo: 5,
  },
  {
    upvoteCnt: 143,
    badgeLetter: 'O',
    companyName: 'Apple',
    text: 'hellohellohellohellohello',
    daysAgo: 15,
  },
];

function FeedbackList() {
  return (
    <ol className='feedback-list'>
      {feedbackItems.map((_item) => (
        <FeedbackItem key={_item.text} {..._item} />
      ))}
    </ol>
  );
}

export default FeedbackList;
