import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Home, Archive, Welcome, About, Contact } from './components';
import { RotaryContainer, AddRotaryContainer } from './containers';
// Use hashHistory for easier development

const store = configureStore();

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Route>
      <Route path="/rotarys" component={Archive}>
        <IndexRoute component={RotaryContainer} />
        <Route path="add" component={AddRotaryContainer} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
