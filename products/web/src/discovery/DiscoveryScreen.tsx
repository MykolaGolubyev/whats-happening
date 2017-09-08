import * as React from 'react';
import * as Immutable from 'immutable';

import { NavigationPanel } from './navigation/NavigationPanel';
import { CorkBoard } from '../cards/CorkBoard';

import './DiscoveryScreen.css';
import sampleData from '../test-data/testEvents';
import { CalendarEvents } from '../events/CalendarEvents';
import { NavigationFilter } from './navigation/NavigationFilter';

interface Props {
}

interface State {
  events: CalendarEvents;
  navigationFilter: NavigationFilter;
}

export class DiscoveryScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      events: new CalendarEvents(sampleData),
      navigationFilter: new NavigationFilter(Immutable.Set.of(), '')
    };
  }

  render() {
    const {navigationFilter} = this.state;

    return (
      <div className="discovery-screen">
        <NavigationPanel onFilterChange={this.onFilterChange} navigationFilter={navigationFilter}/>
        <CorkBoard events={sampleData}/>
      </div>
    );
  }

  onFilterChange = (navigationFilter: NavigationFilter) => {
    this.setState({navigationFilter});
  }
}
