import * as Immutable from 'immutable';

import sampleData from '../test-data/testEvents';
import { CalendarEvents } from './CalendarEvents';
import { NavigationFilter } from '../discovery/navigation/NavigationFilter';

describe('Calendar Events', () => {
  it('should filter events based on search entry and selected category', () => {
    const events = new CalendarEvents(sampleData);
    const filter = new NavigationFilter(Immutable.Set.of('Sports'), 'sprints');

    const filteredEvents = events.filter(filter);
    expect(filteredEvents.events.map(e => e.name)).toEqual(['Bridge Sprints']);
  });
});