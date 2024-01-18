import HashtagItem from './HashtagItem';

type HashtagListProps = {
  companyList: string[];
  handleCompanySelect: (company: string) => void;
};

function HashtagList({ companyList, handleCompanySelect }: HashtagListProps) {
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
