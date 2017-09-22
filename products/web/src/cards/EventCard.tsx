import * as React from 'react';

import { EventInfo } from '../events/EventInfo';
import { SmallEventCard } from './SmallEventCard';
import { LargeEventCard } from './LargeEventCard';
import { EventSelectionCallback } from './EventSelection';

interface CardProps extends EventInfo, EventSelectionCallback {
  isExpanded: boolean;
}

export const EventCard = ({isExpanded, onEventSelection, ...event}: CardProps) => {
  return isExpanded ? <LargeEventCard event={event}/> :
    <SmallEventCard event={event} onEventSelection={onEventSelection}/>;
};