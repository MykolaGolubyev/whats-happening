import * as React from "react";
import './CategoryEntry.css';

interface Props {
    name: string
}

const CategoryEntry = ({name}: Props) => {
    return (
        <div className="category-entry">
            {name}
        </div>
    )
};

export {CategoryEntry}
