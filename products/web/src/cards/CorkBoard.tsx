import * as React from 'react';
import './CorkBoard.css';
import { CalendarEvents } from '../events/CalendarEvents';
import { EventsGroup } from './EventsGroup';
import { EventSelectionCallback } from './EventSelection';

interface CorkBoardProps extends EventSelectionCallback {
  events: CalendarEvents;
  selectedCardId: string;
}

export const CorkBoard = ({events, selectedCardId, onEventSelection}: CorkBoardProps) => (
  <div className="cork-board">
    {events.groups.map(group => <EventsGroup
      key={group.name}
      title={group.name}
      events={group.events}
      selectedCardId={selectedCardId}
      onEventSelection={onEventSelection}
    />)}
  </div>
);
