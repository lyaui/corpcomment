import { useContext } from 'react';
import { FeedbackItemsContext } from '../context/FeedbackItemsContextProvider';

export const useFeedbackItemsCtxVal = () => {
  const ctx = useContext(FeedbackItemsContext);
  if (!ctx) {
    throw new Error(
      'FeedbackItemsContext is not defined in FeedbackList component',
    );
  }
  return ctx;
};
