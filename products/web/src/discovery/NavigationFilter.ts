import * as Immutable from 'immutable';

class NavigationFilter {
  constructor(public readonly selectedCategories: Immutable.Set<string>,
              public readonly searchTerm: string) {
  }

  public newSearchTerm(term: string): NavigationFilter {
    return new NavigationFilter(this.selectedCategories, term);
  }

  public isCategoryEnabled(category: string): boolean {
    return this.selectedCategories.contains(category);
  }

  public newToggledCategory(category: string): NavigationFilter {
    const newCategories = this.selectedCategories.contains(category) ?
      this.selectedCategories.remove(category) :
      this.selectedCategories.add(category);

    return new NavigationFilter(newCategories, this.searchTerm);
  }
}

export { NavigationFilter };