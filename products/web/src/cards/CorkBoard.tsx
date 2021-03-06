import * as React from 'react';
import './CorkBoard.css';
import { CalendarEvents } from '../events/CalendarEvents';
import { EventsGroup } from './EventsGroup';
import { CardCallbacks } from './CardCallbacks';

interface CorkBoardProps {
  cardCallbacks: CardCallbacks;
  events: CalendarEvents;
  hoveredCardId: string;
}

export const CorkBoard = ({events, hoveredCardId, cardCallbacks}: CorkBoardProps) => (
  <div className="cork-board">
    {events.groups.map(group => <EventsGroup
      key={group.name}
      title={group.name}
      events={group.events}
      hoveredCardId={hoveredCardId}
      cardCallbacks={cardCallbacks}
    />)}
  </div>
);
