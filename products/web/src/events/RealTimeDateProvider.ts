import { DateProvider } from './DateProvider';

class RealTimeDateProvider implements DateProvider {
  currentDate(): Date {
    return new Date();
  }
}

export { RealTimeDateProvider };
