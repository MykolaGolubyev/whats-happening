import * as React from 'react';

import { EventInfo } from '../events/EventInfo';
import { SmallEventCard } from './SmallEventCard';
import { CardCallbacks } from './CardCallbacks';

interface CardProps {
  event: EventInfo;
  isHovered: boolean;
  cardCallbacks: CardCallbacks;
}

export const EventCard = ({event, isHovered, cardCallbacks}: CardProps) => {
  return <SmallEventCard event={event} isHovered={isHovered} cardCallbacks={cardCallbacks}/>;
};