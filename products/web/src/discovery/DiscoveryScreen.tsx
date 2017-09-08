import * as React from 'react';

import './DiscoveryScreen.css';
import { NavigationPanel } from './NavigationPanel';

interface Props {
}

interface State {
  selectedCategories: string[];
}

export class DiscoveryScreen extends React.Component<Props, State> {
  render() {
    return (
      <div className="discovery-screen">
        <NavigationPanel/>
      </div>
    );
  }
}
