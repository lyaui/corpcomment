import { type TFeedbackItem } from '../lib/types';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import FeedbackItem from './FeedbackItem';

type FeedbackListProps = {
  isLoading: boolean;
  errorMsg: string;
  feedbackItems: TFeedbackItem[];
};

function FeedbackList({
  isLoading,
  errorMsg,
  feedbackItems,
}: FeedbackListProps) {
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
