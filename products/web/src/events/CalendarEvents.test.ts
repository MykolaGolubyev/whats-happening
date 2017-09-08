import * as Immutable from 'immutable';

import sampleData from '../test-data/testEvents';
import { CalendarEvents } from './CalendarEvents';
import { NavigationFilter } from '../discovery/navigation/NavigationFilter';
import { FixedDateProvider } from './FixedTimeDateProvider';

const fixedDateProvider = new FixedDateProvider(new Date());
const events = new CalendarEvents(sampleData, fixedDateProvider);

describe('Calendar Events', () => {
  it('should filter events based on search entry and selected category', () => {
    const filteredEvents = events.filter(new NavigationFilter(Immutable.Set.of('Sports'), 'sprints'));
    expect(filteredEvents.events.map(e => e.name)).toEqual(['Bridge Sprints']);
  });

  it('should not filter events based on category if no category is selected', () => {
    const filteredEvents = events.filter(new NavigationFilter(Immutable.Set.of(), ''));
    expect(filteredEvents.count).toBeGreaterThan(0);
  });
});