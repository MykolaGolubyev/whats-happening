import * as React from 'react';
import { NavigationPanel } from './navigation/NavigationPanel';
import { CorkBoard } from '../cards/CorkBoard';

import './DiscoveryScreen.css';
import sampleData from '../test-data/testEvents';
import { CalendarEvents } from '../events/CalendarEvents';

interface Props {
}

interface State {
  events: CalendarEvents;
}

export class DiscoveryScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {events: new CalendarEvents(sampleData)};
  }

  render() {
    return (
      <div className="discovery-screen">
        <NavigationPanel/>
        <CorkBoard events={sampleData}/>
      </div>
    );
  }
}
