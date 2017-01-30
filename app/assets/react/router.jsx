import React from 'react';
import Relay from 'react-relay'
import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router';
import useRelay from 'react-router-relay';
import HomeComponent from './views/home/index.jsx';

const DefaultQuery = {
  info: () => Relay.QL`query { info }`
}

export default class RouterApp extends React.Component {
  render() {
    return (
      <Router history={browserHistory}
              render={applyRouterMiddleware(useRelay)}
              environment={Relay.Store}>
        <Route path="/" component={HomeComponent} queries={DefaultQuery} />
      </Router>
    )
  }
}