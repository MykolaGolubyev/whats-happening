import * as React from 'react';
import { NavigationPanel } from './navigation/NavigationPanel';
import { CorkBoard } from '../cards/CorkBoard';

import './DiscoveryScreen.css';
import sampleData from '../test-data/testEvents';

interface Props {
}

interface State {
}

export class DiscoveryScreen extends React.Component<Props, State> {
  render() {
    return (
      <div className="discovery-screen">
        <NavigationPanel/>
        <CorkBoard events={sampleData}/>
      </div>
    );
  }
}
