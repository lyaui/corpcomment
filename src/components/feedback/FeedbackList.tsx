import { useFeedbackItemsCtxVal } from '../../lib/hooks';

import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import FeedbackItem from './FeedbackItem';

function FeedbackList() {
  const ctx = useFeedbackItemsCtxVal();
  const { isLoading, errorMsg, filteredFeedbackItem } = ctx;

  return (
    <ol className='feedback-list'>
      {isLoading && <Spinner />}
      {errorMsg && <ErrorMessage message={errorMsg} />}
      {filteredFeedbackItem.map((_item) => (
        <FeedbackItem key={_item.id} {..._item} />
      ))}
    </ol>
  );
}

export default FeedbackList;
