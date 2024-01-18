import { useState, useEffect } from 'react';

import { type TFeedbackItem } from '../lib/types';
import Footer from './Footer';
import Container from './Container';
import HashtagList from './HashtagList';

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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

  return (
    <div className='app'>
      <Footer />
      <Container
        isLoading={isLoading}
        errorMsg={errorMsg}
        feedbackItems={feedbackItems}
        handleAddToList={handleAddToList}
      />
      <HashtagList />
    </div>
  );
}

export default App;
