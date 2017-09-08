import * as React from 'react';
import { EventInfo, EventCard } from './EventCard';
import './CorkBoard.css';

interface Props {
    events: EventInfo[];
}

export const CorkBoard = ({events}: Props) => (
    <div className="cork-board">
        {events.map((event, i) => <EventCard key={i} {...event}/>)}
    </div>
);
