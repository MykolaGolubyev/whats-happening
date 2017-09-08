import * as React from 'react';
import './CategoryEntry.css';
import { NavigationFilterCallback } from './NavigationFilterCallback';

interface Props extends NavigationFilterCallback {
  name: string;
  isSelected: boolean;
}

const CategoryEntry = ({name, isSelected, navigationFilter, onFilterChange}: Props) => {
  const className = 'category-entry' + (isSelected ? ' selected' : '');

  return (
    <div className={className} onClick={() => onFilterChange(navigationFilter.newToggledCategory(name))}>
      {name}
    </div>
  );
};

export { CategoryEntry };
