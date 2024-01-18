import { type TFeedbackItem } from '../lib/types';
import Header from './Header';
import FeedbackList from './FeedbackList';

type ContainerProps = {
  isLoading: boolean;
  errorMsg: string;
  feedbackItems: TFeedbackItem[];
  handleAddToList: (text: string) => void;
};

function Container({
  isLoading,
  errorMsg,
  feedbackItems,
  handleAddToList,
}: ContainerProps) {
  return (
    <main className='container'>
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        isLoading={isLoading}
        errorMsg={errorMsg}
        feedbackItems={feedbackItems}
      />
    </main>
  );
}

export default Container;
