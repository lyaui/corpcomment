import useFeedbackItemsStore from '../../store/feedbackItemsStore';
import Pattern from '../Pattern';
import Logo from '../Logo';
import PageHeading from '../PageHeading';
import FeedbackForm from '../feedback/FeedbackForm';

function Header() {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}

export default Header;
