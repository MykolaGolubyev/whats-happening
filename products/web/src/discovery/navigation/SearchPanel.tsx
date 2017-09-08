import * as React from 'react';

import './SearchPanel.css';
import { NavigationFilterCallback } from './NavigationFilterCallback';

const SearchPanel = ({navigationFilter, onFilterChange}: NavigationFilterCallback) => {
  return (
    <div className="search-panel">
      <input
        placeholder="Search term..."
        value={navigationFilter.searchTerm}
        onChange={(e) => onFilterChange(navigationFilter.newSearchTerm(e.target.value))}
      />
    </div>
  );
};

export { SearchPanel };
