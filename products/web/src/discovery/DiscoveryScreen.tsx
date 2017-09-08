import * as React from 'react';
import { EventCard } from '../cards/EventCard';
import './DiscoveryScreen.css';
import { NavigationPanel } from './NavigationPanel';

interface Props {
}

interface State {
  selectedCategories: string[];
}

const tomorrow = new Date(2017, 8, 9);

export class DiscoveryScreen extends React.Component<Props, State> {
  render() {
    return (
      <div className="discovery-screen">
        <NavigationPanel/>
        <EventCard 
          name="Football Practice" 
          category="Sports" 
          date={tomorrow} 
          description={'The Two Sigma football team is going to practice penalty shots.\
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, \
              sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        />
      </div>
    );
  }
}
