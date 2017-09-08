import * as React from 'react';
import './EventCard.css';
import { distanceInWords } from 'date-fns';

interface Props {
    name: string;
    category: string;
    date: Date;
    description: string;
}

const EventCard = ({name, category, date, description}: Props) => (
    <div className="event-card">
        <div className="name">{name}</div>
        <div className="category">{category}</div>
        <div className="date">In {distanceInWords(new Date(), date)}</div>
        <div className="description">{description}</div>
    </div>
);

export { EventCard };