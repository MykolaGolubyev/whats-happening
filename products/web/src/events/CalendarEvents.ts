import { EventInfo } from './EventInfo';
import { NavigationFilter } from '../discovery/navigation/NavigationFilter';

class CalendarEvents {
  constructor(public readonly events: EventInfo[]) {
  }

  filter(filter: NavigationFilter): CalendarEvents {
    return new CalendarEvents(this.filterEvents(filter));
  }

  private filterEvents(filter: NavigationFilter): EventInfo[] {
    return this.events.filter(e => e.name.toLowerCase().indexOf(filter.searchTermLowerCase) !== -1 &&
      filter.isCategorySelected(e.category));
  }
}

export { CalendarEvents };
