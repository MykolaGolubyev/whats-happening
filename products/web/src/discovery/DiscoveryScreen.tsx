import * as React from 'react';
import { CategoriesPanel } from '../categories/CategoriesPanel';

import './DiscoveryScreen.css';

interface Props {
}

interface State {
  selectedCategories: string[];
}

export class DiscoveryScreen extends React.Component<Props, State> {
  render() {
    return (
      <div className="discovery-screen">
        <CategoriesPanel names={['Sport', 'Games', 'ImpacTS']}/>
      </div>
    );
  }
}
