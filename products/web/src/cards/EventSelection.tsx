import { EventInfo } from '../events/EventInfo';

export interface EventSelectionCallback {
  onEventSelection: (event: EventInfo) => void;
}