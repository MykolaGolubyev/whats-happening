import * as React from 'react';
import './CorkBoard.css';
import { CalendarEvents } from '../events/CalendarEvents';
import { EventsGroup } from './EventsGroup';

interface CorkBoardProps {
  events: CalendarEvents;
}

export const CorkBoard = ({events}: CorkBoardProps) => (
  <div className="cork-board">
    {events.groups.map(group => <EventsGroup key={group.name} title={group.name} events={group.events}/>)}
  </div>
);
