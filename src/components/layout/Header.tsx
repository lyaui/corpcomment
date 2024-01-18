import { useFeedbackItemsCtxVal } from '../../lib/hooks';
import Pattern from '../Pattern';
import Logo from '../Logo';
import PageHeading from '../PageHeading';
import FeedbackForm from '../feedback/FeedbackForm';

function Header() {
  const { handleAddToList } = useFeedbackItemsCtxVal();
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
}

export default Header;
