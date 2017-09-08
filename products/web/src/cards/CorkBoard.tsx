import * as React from 'react';
import * as _ from 'lodash';
import { differenceInCalendarWeeks } from 'date-fns';

import { EventInfo } from '../events/EventInfo';
import { EventCard } from './EventCard';

import './CorkBoard.css';

interface Props {
  events: EventInfo[];
}

function groupEvents(events: EventInfo[]): EventInfo[][] {
  const today = Date.now();
  const byWeeks = _.groupBy(events, info => differenceInCalendarWeeks(info.date, today));
  return _.map(byWeeks, (value, key) => value);
}

export const Week = ({events}: Props) => (
  <div className="week">
    {events.map((event, i) => <EventCard key={i} {...event}/>)}
  </div>
);

export const CorkBoard = ({events}: Props) => (
  <div className="cork-board">
    {groupEvents(events).map((weekOfEvents, i) => <Week key={i} events={weekOfEvents}/>)}
  </div>
);
