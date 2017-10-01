import { EventInfo } from '../events/EventInfo';

export interface CardCallbacks {
  onSelect: (event: EventInfo) => void;
  onGoing: (event: EventInfo) => void;
  onInterested: (event: EventInfo) => void;
  onVote: (event: EventInfo) => void;
  onMouseOver: (event: EventInfo) => void;
  onMouseLeave: (event: EventInfo) => void;
}
