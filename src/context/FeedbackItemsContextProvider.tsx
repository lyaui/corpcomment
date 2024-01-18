import { createContext, useState, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';

import { type TFeedbackItem } from '../lib/types';

type TFeedbackItemsContext = {
  filteredFeedbackItem: TFeedbackItem[];
  isLoading: boolean;
  errorMsg: string;
  companyList: string[];
  handleAddToList: (text: string) => void;
  handleCompanySelect: (company: string) => void;
};
type FeedbackItemsContextProvider = { children: ReactNode };

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null,
);

function FeedbackItemsContextProvider({
  children,
}: FeedbackItemsContextProvider) {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const filteredFeedbackItem = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (_feedback) => _feedback.company === selectedCompany,
          )
        : feedbackItems,
    [feedbackItems, selectedCompany],
  );

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((_feedback) => _feedback.company)
        .filter((_company, _index, _arr) => _arr.indexOf(_company) === _index),
    [feedbackItems],
  );

  const handleCompanySelect = (company: string) => {
    setSelectedCompany(company);
  };

  const handleAddToList = async (text: string) => {
    const company =
      text
        .split(' ')
        .find((_word) => _word.includes('#'))!
        .substring(1) || '';

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: company.substring(0, 1).toUpperCase(),
      company,
      text,
      daysAgo: 0,
    };

    setFeedbackItems((_curState) => [..._curState, newItem]);

    await fetch(
      'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
      {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
  };

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

  const value: TFeedbackItemsContext = {
    filteredFeedbackItem,
    isLoading,
    errorMsg,
    companyList,
    handleAddToList,
    handleCompanySelect,
  };

  return (
    <FeedbackItemsContext.Provider value={value}>
      {children}
    </FeedbackItemsContext.Provider>
  );
}

export default FeedbackItemsContextProvider;
