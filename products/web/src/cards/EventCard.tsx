import * as React from 'react';

import { EventInfo } from '../events/EventInfo';
import { SmallEventCard } from './SmallEventCard';

export const EventCard = (event: EventInfo) => {
  return <SmallEventCard {...event}/>;
};