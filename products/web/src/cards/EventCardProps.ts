import { EventInfo } from '../events/EventInfo';
import { CardCallbacks } from './CardCallbacks';

export interface EventCardProps {
  event: EventInfo;
  isHovered: boolean;
  cardCallbacks?: CardCallbacks;
}