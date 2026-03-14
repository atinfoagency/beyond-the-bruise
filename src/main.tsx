import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById('root'));