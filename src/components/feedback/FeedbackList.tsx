import useFeedbackItemsStore from '../../store/feedbackItemsStore';

import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import FeedbackItem from './FeedbackItem';

function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMsg = useFeedbackItemsStore((state) => state.errorMsg);
  const filteredFeedbackItem = useFeedbackItemsStore((state) =>
    state.getFilteredFeedbackItem(),
  );

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
