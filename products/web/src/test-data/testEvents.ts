import { EventInfo } from '../events/EventInfo';
import { addDays } from 'date-fns';

const tomorrow = addDays(new Date(), 1);
const aWeekFromNow = addDays(new Date(), 7);

const sampleData: EventInfo[] = [
  {
    id: 'ev-guid-1',
    name: 'Football Practice',
    category: 'Sports',
    date: tomorrow,
    description: 'The Two Sigma football team is going to practice penalty shots.'
  },
  {
    id: 'ev-guid-2',
    name: 'Bridge Sprints',
    category: 'Sports',
    date: tomorrow,
    description: 'Bike over the manhattan bridge as fast as you can, again and again.'
  },
  {
    id: 'ev-guid-3',
    name: 'Bi 2',
    category: 'Sports',
    date: tomorrow,
    description: 'Bike over the manhattan bridge as fast as you can, again and again.'
  },
  {
    id: 'ev-guid-4',
    name: 'Poker',
    category: 'Gaming',
    date: tomorrow,
    description: 'Play various poker games, including 52-card pick up.'
  },
  {
    id: 'ev-guid-5',
    name: 'Open Source Hack Night',
    category: 'Programming',
    date: tomorrow,
    description: 'Work on whats-happening.'
  },
  {
    id: 'ev-guid-6',
    name: 'Magic the Gathering Draft',
    category: 'Gaming',
    date: aWeekFromNow,
    description: 'Build a deck out of booster packs and try to win the tournmanet.'
  },
];

export default sampleData;
