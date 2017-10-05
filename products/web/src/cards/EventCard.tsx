import * as React from 'react';

import { SmallEventCard } from './SmallEventCard';
import { EventCardProps } from './EventCardProps';

export const EventCard = ({event, isHovered, cardCallbacks}: EventCardProps) => {
  return <SmallEventCard event={event} isHovered={isHovered} cardCallbacks={cardCallbacks}/>;
};