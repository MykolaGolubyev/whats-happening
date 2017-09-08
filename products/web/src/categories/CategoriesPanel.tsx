import * as React from 'react';
import './CategoriesPanel.css';
import {CategoryEntry} from "./CategoryEntry";

interface Props {
    names: string[];
    ids: string[];
}

const CategoriesPanel = ({names}: Props) => {
    return (
        <div className="categories-panel">
            {names.map(n => <CategoryEntry name={n}/>)}
        </div>
    );
};

export {CategoriesPanel};
