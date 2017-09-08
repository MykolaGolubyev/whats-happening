import * as React from 'react';

import './SearchPanel.css';

interface Props {
  term: string;
  onTermChange: (term: string) => void;
}

const SearchPanel = ({term, onTermChange}: Props) => {
  return (
    <div className="search-panel">
      <input
        placeholder="Search term..."
        value={term}
        onChange={(e) => onTermChange(e.target.value)}
      />
    </div>
  );
};

export { SearchPanel };
