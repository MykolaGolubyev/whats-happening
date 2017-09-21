import * as React from 'react';
import './SmallEventCard.css';
import { distanceInWords } from 'date-fns';
import { EventInfo } from '../events/EventInfo';

export const SmallEventCard = ({name, category, date, description}: EventInfo) => (
    <div className="small-event-card">
        <div className="name">{name}</div>
        <div className="category">{category}</div>
        <div className="date">In {distanceInWords(new Date(), date)}</div>
        <div className="description">{description}</div>
    </div>
);