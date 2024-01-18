import useFeedbackItemsStore from '../../store/feedbackItemsStore';
import HashtagItem from './HashtagItem';

function HashtagList() {
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <ul className='hashtags'>
      {companyList.map((_company) => (
        <HashtagItem
          key={_company}
          company={_company}
          onClick={selectCompany}
        />
      ))}
    </ul>
  );
}

export default HashtagList;
