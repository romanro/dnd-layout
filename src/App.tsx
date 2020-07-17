import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { ConfigurationPage, LayoutsPage } from './pages';
import { Navbar } from './ui-elements';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/" component={LayoutsPage} />
          <Route exact path="/config/:layoutId" component={ConfigurationPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
