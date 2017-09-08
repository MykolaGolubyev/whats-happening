import { DateProvider } from './DateProvider';

class FixedDateProvider implements DateProvider {
  constructor(private readonly fixedDate: Date) {
  }

  currentDate(): Date {
    return this.fixedDate;
  }
}

export { FixedDateProvider };
