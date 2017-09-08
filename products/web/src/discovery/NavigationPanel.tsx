import * as React from 'react';
import * as Immutable from 'immutable';

import { CategoriesPanel } from '../categories/CategoriesPanel';
import { SearchPanel } from './SearchPanel';
import { NavigationFilter } from './NavigationFilter';

import './NavigationPanel.css';

interface Props {
}

interface State {
  navigationFilter: NavigationFilter;
}

class NavigationPanel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {navigationFilter: new NavigationFilter(Immutable.Set.of(), '')};
  }

  render() {
    return (
      <div className="navigation-panel">
        <CategoriesPanel names={['Sport', 'Games', 'ImpacTS']}/>
        <SearchPanel term={this.state.navigationFilter.searchTerm} onTermChange={this.onSearchTermChange}/>
      </div>
    );
  }

  onSearchTermChange = (term: string) => {
    this.setState({navigationFilter: this.state.navigationFilter.newSearchTerm(term)});
  }
}

export { NavigationPanel };
