import * as React from 'react';

import { CategoriesPanel } from './CategoriesPanel';
import { SearchPanel } from './SearchPanel';

import './NavigationPanel.css';
import { NavigationFilterCallback } from './NavigationFilterCallback';

const NavigationPanel = ({onFilterChange, navigationFilter}: NavigationFilterCallback) => {
  return (
    <div className="navigation-panel">
      <CategoriesPanel
        names={['Sports', 'Gaming', 'ImpacTS']}
        navigationFilter={navigationFilter}
        onFilterChange={onFilterChange}
      />
      <SearchPanel
        navigationFilter={navigationFilter}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};

export { NavigationPanel };
