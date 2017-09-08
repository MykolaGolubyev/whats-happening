import * as React from 'react';
import './CategoriesPanel.css';
import { CategoryEntry } from './CategoryEntry';
import { NavigationFilter } from './NavigationFilter';
import { NavigationFilterCallback } from './NavigationFilterCallback';

interface Props extends NavigationFilterCallback {
  names: string[];
  navigationFilter: NavigationFilter;
}

const CategoriesPanel = ({names, navigationFilter, onFilterChange}: Props) => {
  return (
    <div className="categories-panel">
      {names.map(n =>
        <CategoryEntry
          key={n}
          name={n}
          navigationFilter={navigationFilter}
          onFilterChange={onFilterChange}
          isSelected={navigationFilter.isCategorySelected(n)}
        />)}
    </div>
  );
};

export { CategoriesPanel };
