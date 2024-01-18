import React from 'react';

type HashtagItemProps = {
  company: string;
  onClick: (company: string) => void;
};

function HashtagItem({ company, onClick }: HashtagItemProps) {
  return (
    <li key={company}>
      <button onClick={() => onClick(company)}>{`#${company}`}</button>
    </li>
  );
}

export default HashtagItem;
