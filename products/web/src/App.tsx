import * as React from 'react';
import './App.css';
import { CategoriesPanel } from './categories/CategoriesPanel';

class App extends React.Component {
  render() {
      return (
          <CategoriesPanel names={['Sport', 'Games', 'ImpacTS']} ids={['df']}/>
      );
  }
}

export default App;
