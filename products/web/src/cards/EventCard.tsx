import * as React from 'react';

import { EventInfo } from '../events/EventInfo';
import { SmallEventCard } from './SmallEventCard';
import { CardCallbacks } from './CardCallbacks';

interface CardProps {
  event: EventInfo;
  isExpanded: boolean;
  cardCallbacks: CardCallbacks;
}

export const EventCard = ({event, isExpanded, cardCallbacks}: CardProps) => {
  return <SmallEventCard event={event} cardCallbacks={cardCallbacks}/>;
};