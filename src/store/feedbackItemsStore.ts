import { create } from 'zustand';

import { TFeedbackItem } from '../lib/types';

type Store = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMsg: string;
  selectedCompany: string;
  getCompanyList: () => string[];
  getFilteredFeedbackItem: () => TFeedbackItem[];
  addItemToList: (text: string) => void;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => void;
};

const useFeedbackItemsStore = create<Store>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMsg: '',
  selectedCompany: '',
  getCompanyList: () => {
    const { feedbackItems } = get();
    return feedbackItems
      .map((_feedback) => _feedback.company)
      .filter((_company, _index, _arr) => _arr.indexOf(_company) === _index);
  },
  getFilteredFeedbackItem: () => {
    const { selectedCompany, feedbackItems } = get();
    return selectedCompany
      ? feedbackItems.filter(
          (_feedback) => _feedback.company === selectedCompany,
        )
      : feedbackItems;
  },
  addItemToList: async (text: string) => {
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

    set((state) => ({ feedbackItems: [...state.feedbackItems, newItem] }));

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
  },
  selectCompany: (company: string) => {
    set(() => ({ selectedCompany: company }));
  },
  fetchFeedbackItems: async () => {
    try {
      set(() => ({ isLoading: true }));
      const res = await fetch(
        ' https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
      );

      if (!res.ok) throw new Error();
      const data = await res.json();
      set(() => ({ feedbackItems: data.feedbacks }));
    } catch {
      set(() => ({ errorMsg: 'something went wrong.' }));
    }
    set(() => ({ isLoading: false }));
  },
}));

export default useFeedbackItemsStore;
