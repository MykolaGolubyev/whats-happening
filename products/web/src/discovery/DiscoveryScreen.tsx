import * as React from 'react';
import * as Immutable from 'immutable';

import { NavigationPanel } from './navigation/NavigationPanel';
import { CorkBoard } from '../cards/CorkBoard';

import './DiscoveryScreen.css';
import sampleData from '../test-data/testEvents';
import { CalendarEvents } from '../events/CalendarEvents';
import { NavigationFilter } from './navigation/NavigationFilter';
import { RealTimeDateProvider } from '../events/RealTimeDateProvider';
import { EventInfo } from '../events/EventInfo';

interface Props {
}

interface State {
  allEvents: CalendarEvents;
  navigationFilter: NavigationFilter;
  selectedId: string;
}

export class DiscoveryScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      allEvents: new CalendarEvents(sampleData, new RealTimeDateProvider()),
      navigationFilter: new NavigationFilter(Immutable.Set.of(), ''),
      selectedId: ''
    };
  }

  render() {
    const {allEvents, navigationFilter, selectedId} = this.state;

    return (
      <div className="discovery-screen">
        <NavigationPanel onFilterChange={this.onFilterChange} navigationFilter={navigationFilter}/>
        <CorkBoard
          events={allEvents.filter(navigationFilter)}
          selectedCardId={selectedId}
          onEventSelection={this.onEventSelection}
        />
      </div>
    );
  }

  onFilterChange = (navigationFilter: NavigationFilter) => {
    this.setState({navigationFilter: navigationFilter});
  }

  onEventSelection = (event: EventInfo) => {
    this.setState({selectedId: event.id});
  }
}
