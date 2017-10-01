import * as React from 'react';
import './SmallEventCard.css';
import { distanceInWords } from 'date-fns';
import { EventInfo } from '../events/EventInfo';
import { CardCallbacks } from './CardCallbacks';

interface SmallEventCardProps {
  event: EventInfo;
  cardCallbacks: CardCallbacks;
  isHovered: boolean;
}

export const SmallEventCard = ({event, cardCallbacks, isHovered}: SmallEventCardProps) => {
  return (
    <div
      className="small-event-card"
      onClick={() => cardCallbacks.onSelect(event)}
      onMouseOver={() => cardCallbacks.onMouseOver(event)}
      onMouseLeave={() => cardCallbacks.onMouseLeave(event)}
    >
      <div className="name">{event.name}</div>
      <div className="category">{event.category}</div>
      <div className="date">In {distanceInWords(new Date(), event.date)}</div>
      <div className="description">{event.description}</div>

      {isHovered ? (
        <div className="actions-and-stats">
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
          <div className="buttons">
            <div className="button going">Going</div>
            <div className="button interested">Interested</div>
          </div>
        </div>) : null}
    </div>
  );
};