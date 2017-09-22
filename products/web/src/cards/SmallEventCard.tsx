import * as React from 'react';
import './SmallEventCard.css';
import { distanceInWords } from 'date-fns';
import { EventInfo } from '../events/EventInfo';
import { EventSelectionCallback } from './EventSelection';

interface SmallEventCardProps extends EventSelectionCallback {
  event: EventInfo;
}

export const SmallEventCard = ({event, onEventSelection}: SmallEventCardProps) => (
  <div className="small-event-card" onClick={() => onEventSelection(event)}>
    <div className="name">{event.name}</div>
    <div className="category">{event.category}</div>
    <div className="date">In {distanceInWords(new Date(), event.date)}</div>
    <div className="description">{event.description}</div>
  </div>
);