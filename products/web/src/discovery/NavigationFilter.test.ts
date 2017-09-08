import { NavigationFilter } from './NavigationFilter';
import * as Immutable from 'immutable';

describe('NavigationFilter', () => {
  let navigationFilter = new NavigationFilter(Immutable.Set.of(), '');

  it('should toggle selected categories', () => {
    const newFilter = navigationFilter.newToggledCategory('sport');
    expect(newFilter.isCategoryEnabled('sport')).toBeTruthy();

    const anotherNewFilter = newFilter.newToggledCategory('sport');
    expect(anotherNewFilter.isCategoryEnabled('sport')).toBeFalsy();
  });
});