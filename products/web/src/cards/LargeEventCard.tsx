import * as React from 'react';
import { distanceInWords } from 'date-fns';

import { EventInfo } from '../events/EventInfo';

import './LargeEventCard.css';

interface LargeEventCardProps {
  event: EventInfo;
}

export const LargeEventCard = ({event}: LargeEventCardProps) => (
  <div className="large-event-card">
    <div className="name">{event.name}</div>
    <div className="category">{event.category}</div>
    <div className="date">In {distanceInWords(new Date(), event.date)}</div>
    <div className="description">{event.description}</div>
  </div>
);