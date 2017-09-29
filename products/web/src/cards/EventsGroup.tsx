import * as React from 'react';

import { EventInfo } from '../events/EventInfo';
import { EventCard } from './EventCard';
import { EventsGroupTitle } from './EventsGroupTitle';

import './EventsGroup.css';
import { CardCallbacks } from './CardCallbacks';

interface GroupProps {
  title: string;
  events: EventInfo[];
  selectedCardId: string;
  cardCallbacks: CardCallbacks;
}

export const EventsGroup = ({title, events, cardCallbacks, selectedCardId}: GroupProps) => (
  <div className="events-group">
    <EventsGroupTitle title={title}/>
    <div className="content">
      {events.map(event => <EventCard
        key={event.id}
        event={event}
        isExpanded={event.id === selectedCardId}
        cardCallbacks={cardCallbacks}
      />)}
    </div>
  </div>
);
