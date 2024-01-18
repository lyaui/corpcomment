import { useContext, useEffect, useState } from 'react';

import { FeedbackItemsContext } from '../context/FeedbackItemsContextProvider';
import { TFeedbackItem } from './types';

export const useFeedbackItemsCtxVal = () => {
  const ctx = useContext(FeedbackItemsContext);
  if (!ctx) {
    throw new Error(
      'FeedbackItemsContext is not defined in FeedbackList component',
    );
  }
  return ctx;
};

export const useFeedbackItems = () => {
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

  return { feedbackItems, isLoading, errorMsg, setFeedbackItems };
};
