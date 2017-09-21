import * as React from 'react';

import './EventsGroupTitle.css';

export const EventsGroupTitle = ({title}: { title: string }) => {
  return (
    <div className="events-group-title-panel">
      <div className="dashes"/>
      <div className="title">
        {title}
      </div>
      <div className="dashes"/>
    </div>
  );
};