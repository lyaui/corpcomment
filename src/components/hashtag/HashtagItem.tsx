import { memo } from 'react';

type HashtagItemProps = {
  company: string;
  onClick: (company: string) => void;
};

const HashtagItem = memo(({ company, onClick }: HashtagItemProps) => {
  return (
    <li key={company}>
      <button onClick={() => onClick(company)}>{`#${company}`}</button>
    </li>
  );
});

export default HashtagItem;
