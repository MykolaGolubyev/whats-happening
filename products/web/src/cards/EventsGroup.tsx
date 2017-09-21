import * as React from 'react';

import { EventInfo } from '../events/EventInfo';
import { EventCard } from './EventCard';
import { EventsGroupTitle } from './EventsGroupTitle';

import './EventsGroup.css';

interface GroupProps {
  title: string;
  events: EventInfo[];
}

export const EventsGroup = ({title, events}: GroupProps) => (
  <div className="events-group">
    <EventsGroupTitle title={title}/>
    <div className="content">
      {events.map((event, i) => <EventCard key={i} {...event}/>)}
    </div>
  </div>
);
