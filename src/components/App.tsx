import FeedbackItemsContextProvider from '../context/FeedbackItemsContextProvider';
import Footer from './layout/Footer';
import Container from './layout/Container';
import HashtagList from './hashtag/HashtagList';

function App() {
  return (
    <div className='app'>
      <Footer />
      <FeedbackItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}

export default App;
