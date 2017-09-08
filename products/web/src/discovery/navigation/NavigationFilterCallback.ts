import { NavigationFilter } from './NavigationFilter';

interface NavigationFilterCallback {
  navigationFilter: NavigationFilter;
  onFilterChange: (filter: NavigationFilter) => void;
}

export { NavigationFilterCallback };