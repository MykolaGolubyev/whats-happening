import * as React from 'react';
import './CategoriesPanel.css';
import { CategoryEntry } from './CategoryEntry';

interface Props {
  names: string[];
}

const CategoriesPanel = ({names}: Props) => {
  return (
    <div className="categories-panel">
      {names.map(n => <CategoryEntry key={n} name={n}/>)}
    </div>
  );
};

export { CategoriesPanel };
