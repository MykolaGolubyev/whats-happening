import * as React from 'react';
import { Component } from 'react';

import TextField from 'material-ui/TextField';

import './CreateScreen.css';
import { EventCard } from '../cards/EventCard';
import { EventInfo } from '../events/EventInfo';

interface Props {

}

interface State {

}

export class CreateScreen extends Component<Props, State> {
  render() {
    const event: EventInfo = {
      id: 'editing-id',
      name: 'dummy',
      category: 'category',
      date: new Date(),
      description: 'description',
      going: 0,
      interested: 0
    };

    return (
      <div className="event-creation">
        <div className="editing">
          <div className="essential-data">
            <TextField floatingLabelText="Event Title"/>
            <TextField multiLine={true} floatingLabelText="Description"/>
          </div>
        </div>
        <div className="preview">
          <EventCard event={event} isHovered={false} cardCallbacks={undefined}/>
        </div>
      </div>
    );
  }
}
