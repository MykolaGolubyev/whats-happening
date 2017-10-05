import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { DiscoveryScreen } from './discovery/DiscoveryScreen';

import './App.css';
import { Route } from 'react-router';
import { CreateScreen } from './creation/CreateScreen';

class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Route path="/discover" component={DiscoveryScreen}/>
          <Route path="/create" component={CreateScreen}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;