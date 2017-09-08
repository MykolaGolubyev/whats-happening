import * as Immutable from 'immutable';

class NavigationFilter {
  public readonly searchTermLowerCase: string;

  constructor(public readonly selectedCategories: Immutable.Set<string>,
              public readonly searchTerm: string) {
    this.searchTermLowerCase = searchTerm.toLowerCase();
  }

  public newSearchTerm(term: string): NavigationFilter {
    return new NavigationFilter(this.selectedCategories, term);
  }

  public isCategorySelected(category: string): boolean {
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