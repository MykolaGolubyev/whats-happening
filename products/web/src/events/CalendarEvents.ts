import { differenceInCalendarDays } from 'date-fns';

import { EventInfo } from './EventInfo';
import { NavigationFilter } from '../discovery/navigation/NavigationFilter';
import { DateProvider } from './DateProvider';
import { EventsGroup } from './CalendarEventsGroup';

class CalendarEvents {
  public groups: EventsGroup[] = [];
  private currentDate: Date;

  constructor(public readonly events: EventInfo[], private readonly dateProvider: DateProvider) {
    this.currentDate = dateProvider.currentDate();
    this.registerGroup('This Week', 0, 6);
    this.registerGroup('Next Week', 7, 13);
  }

  get count(): number {
    return this.events.length;
  }

  filter(filter: NavigationFilter): CalendarEvents {
    return new CalendarEvents(this.filterEvents(filter), this.dateProvider);
  }

  private filterEvents(filter: NavigationFilter): EventInfo[] {
    return this.events.filter(e => e.name.toLowerCase().indexOf(filter.searchTermLowerCase) !== -1 &&
      ((!filter.isAnyCategorySelected()) || filter.isCategorySelected(e.category)));
  }

  private registerGroup(groupName: string, dayFrom: number, dayTo: number) {
    const groupCondition = (e: EventInfo) => {
      const diffInDays = differenceInCalendarDays(e.date, this.currentDate);
      return diffInDays >= dayFrom && diffInDays <= dayTo;
    };

    this.groups.push(new EventsGroup(groupName, groupCondition, this.events));
  }
}

export { CalendarEvents };
