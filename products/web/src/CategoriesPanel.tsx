import * as React from 'react';

interface Props {
    names: string[];
    ids: string[];
}

const CategoriesPanel = ({names, ids}: Props) => {
    return (
        <div>{names}</div>
    );
};

export {CategoriesPanel};
