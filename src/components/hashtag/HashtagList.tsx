import { useFeedbackItemsCtxVal } from '../../lib/hooks';
import HashtagItem from './HashtagItem';

function HashtagList() {
  const { companyList, handleCompanySelect } = useFeedbackItemsCtxVal();
  return (
    <ul className='hashtags'>
      {companyList.map((_company) => (
        <HashtagItem
          key={_company}
          company={_company}
          onClick={handleCompanySelect}
        />
      ))}
    </ul>
  );
}

export default HashtagList;
