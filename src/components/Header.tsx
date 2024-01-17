import Pattern from './Pattern';
import Logo from './Logo';
import PageHeading from './PageHeading';
import FeedbackForm from './FeedbackForm';

function Header() {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </header>
  );
}

export default Header;
