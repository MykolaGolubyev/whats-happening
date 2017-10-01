import * as React from 'react';

import { EventInfo } from '../events/EventInfo';
import { EventCard } from './EventCard';
import { EventsGroupTitle } from './EventsGroupTitle';

import './EventsGroup.css';
import { CardCallbacks } from './CardCallbacks';

interface GroupProps {
  title: string;
  events: EventInfo[];
  hoveredCardId: string;
  cardCallbacks: CardCallbacks;
}

export const EventsGroup = ({title, events, cardCallbacks, hoveredCardId}: GroupProps) => (
  <div className="events-group">
    <EventsGroupTitle title={title}/>
    <div className="content">
      {events.map(event => <EventCard
        key={event.id}
        event={event}
        isHovered={event.id === hoveredCardId}
        cardCallbacks={cardCallbacks}
      />)}
    </div>
  </div>
);
