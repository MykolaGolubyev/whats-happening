import * as React from 'react';

import { EventInfo } from '../events/EventInfo';
import { EventCard } from './EventCard';
import { EventsGroupTitle } from './EventsGroupTitle';

import './EventsGroup.css';
import { EventSelectionCallback } from './EventSelection';

interface GroupProps extends EventSelectionCallback {
  title: string;
  events: EventInfo[];
  selectedCardId: string;
}

export const EventsGroup = ({title, events, onEventSelection, selectedCardId}: GroupProps) => (
  <div className="events-group">
    <EventsGroupTitle title={title}/>
    <div className="content">
      {events.map(event => <EventCard
        key={event.id}
        {...event}
        isExpanded={event.id === selectedCardId}
        onEventSelection={onEventSelection}
      />)}
    </div>
  </div>
);
