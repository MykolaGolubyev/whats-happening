import * as React from 'react';
import { EventInfo } from '../cards/EventCard';
import './DiscoveryScreen.css';
import { NavigationPanel } from './NavigationPanel';
import { CorkBoard } from '../cards/CorkBoard';

interface Props {
}

interface State {
  selectedCategories: string[];
}

const tomorrow = new Date(2017, 8, 9);

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
