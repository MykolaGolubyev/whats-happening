import * as React from 'react';
import { EventCard } from './EventCard';
import { EventInfo } from '../events/EventInfo';
import './CorkBoard.css';
import { differenceInCalendarWeeks } from 'date-fns';

interface WeekProps {
    week: number;
    events: EventInfo[];
}

interface CorkBoardProps {
    allEvents: EventInfo[];
}

function groupEvents(events: Array<EventInfo>): [number, EventInfo[]][] {
    const today = Date.now();
    const map: Map<number, EventInfo[]> = new Map();
    for (const event of events) {
        const weekDiff = differenceInCalendarWeeks(event.date, today);
        let list = map.get(weekDiff);
        if (list === undefined) {
            list = [];
            map.set(weekDiff, list);
        }
        list.push(event);
    }
    const keys = Array.from(map.keys()).sort();
    const out: [number, EventInfo[]][] = [];
    for (const key of keys) {
        const val = map.get(key);
        if (val) {
            out.push([key, val]);
        }
    }
    return out;
}

function weeksFromNow(week: number): string {
    switch (week) {
        case 0:
            return 'This week';
        case 1:
            return 'Next week';
        default:
            return week + ' weeks from now';
    }
}

export const Week = ({week, events}: WeekProps) => (
    <div className="week">
        <h1>{weeksFromNow(week)}</h1>
        <div className="week-content">
            {events.map((event, i) => <EventCard key={i} {...event}/>)}
        </div>
    </div>
);

export const CorkBoard = ({allEvents}: CorkBoardProps) => (
    <div className="cork-board">
        {groupEvents(allEvents).map(([week, events], i) => <Week key={i} week={week} events={events}/>)}
    </div>
);
