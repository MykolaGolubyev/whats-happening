import * as React from 'react';
import { EventCard } from './EventCard';
import { EventInfo } from '../events/EventInfo';
import './CorkBoard.css';
import { CalendarEvents } from '../events/CalendarEvents';

interface GroupProps {
  name: string;
  events: EventInfo[];
}

export const EventsGroup = ({name, events}: GroupProps) => (
  <div className="events-group">
    <h1>{name}</h1>
    <div className="content">
      {events.map((event, i) => <EventCard key={i} {...event}/>)}
    </div>
  </div>
);

interface CorkBoardProps {
  events: CalendarEvents;
}

export const CorkBoard = ({events}: CorkBoardProps) => (
  <div className="cork-board">
    {events.groups.map(group => <EventsGroup key={group.name} name={group.name} events={group.events}/>)}
  </div>
);
