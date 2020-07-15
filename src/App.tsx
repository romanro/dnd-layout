import React from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { ConfigurationPage, LayoutsPage } from './pages';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Layout Page</Link>
          <Link to="/config/1">Widgets Page</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={LayoutsPage} />
          <Route exact path="/config/:layoutId" component={ConfigurationPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
