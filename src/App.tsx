import React from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { LayoutPage, WidgetsPage } from './pages';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Layout Page</Link>
          <Link to="/widgets">Widgets Page</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={LayoutPage} />
          <Route exact path="/widgets" component={WidgetsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
