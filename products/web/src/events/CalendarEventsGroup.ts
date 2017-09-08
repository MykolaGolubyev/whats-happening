import { EventInfo } from './EventInfo';

class EventsGroup {
  public readonly events: EventInfo[];

  constructor(public readonly name: string,
              condition: (e: EventInfo) => boolean,
              allEvents: EventInfo[]) {
    this.events = allEvents.filter(condition);
  }
}

export { EventsGroup };