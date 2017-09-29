import * as React from 'react';
import './SmallEventCard.css';
import { distanceInWords } from 'date-fns';
import { EventInfo } from '../events/EventInfo';
import { CardCallbacks } from './CardCallbacks';

interface SmallEventCardProps {
  event: EventInfo;
  cardCallbacks: CardCallbacks;
}

export const SmallEventCard = ({event, cardCallbacks}: SmallEventCardProps) => {
  return (
    <div className="small-event-card" onClick={() => cardCallbacks.onSelect(event)}>
      <div className="name">{event.name}</div>
      <div className="category">{event.category}</div>
      <div className="date">In {distanceInWords(new Date(), event.date)}</div>
      <div className="description">{event.description}</div>
      <div className="buttons">
        <div className="button going">Going</div>
        <div className="button interested">Interested</div>
      </div>
      <div className="stats">
        <div className="stat going">
          <span className="label">going</span>
          <span className="count">{event.going}</span>
        </div>
        <div className="stat interested">
          <span className="label">interested</span>
          <span className="count">{event.interested}</span>
        </div>
      </div>
    </div>
  );
};