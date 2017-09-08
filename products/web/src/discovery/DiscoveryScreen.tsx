import * as React from 'react';
import { EventInfo } from '../cards/EventCard';
import './DiscoveryScreen.css';
import { NavigationPanel } from './navigation/NavigationPanel';
import { CorkBoard } from '../cards/CorkBoard';

interface Props {
}

interface State {
  selectedCategories: string[];
}

const tomorrow = new Date(2017, 8, 9);
const aWeekFromNow = new Date(2017, 8, 9 + 7);

const sampleData: EventInfo[] = [
  {
    name: 'Football Practice',
    category: 'Sports',
    date: tomorrow,
    description: 'The Two Sigma football team is going to practice penalty shots.'
  },
  {
    name: 'Bridge Sprints',
    category: 'Sports',
    date: tomorrow,
    description: 'Bike over the manhattan bridge as fast as you can, again and again.'
  },
  {
    name: 'Poker',
    category: 'Gaming',
    date: tomorrow,
    description: 'Play various poker games, including 52-card pick up.'
  },
  {
    name: 'Open Source Hack Night',
    category: 'Programming',
    date: tomorrow,
    description: 'Work on whats-happening.'
  },
  {
    name: 'Magic the Gathering Draft',
    category: 'Gaming',
    date: aWeekFromNow,
    description: 'Build a deck out of booster packs and try to win the tournmanet.'
  },
];

export class DiscoveryScreen extends React.Component<Props, State> {
  render() {
    return (
      <div className="discovery-screen">
        <NavigationPanel/>
        <CorkBoard events={sampleData}/>
      </div>
    );
  }
}
