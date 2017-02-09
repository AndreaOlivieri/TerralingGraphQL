import React from 'react';
import Relay from 'react-relay'
import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router';
import useRelay from 'react-router-relay';
import {HomeContainer, homePrepareParams} from './views/home/index.jsx';

const DefaultQuery = {
  data: () => Relay.QL`query {
    data
  }`
}


export default class RouterApp extends React.Component {
  render() {
    return (
      <Router history={browserHistory}
              render={applyRouterMiddleware(useRelay)}
              forceFetch={true}
              environment={Relay.Store}>
        <Route path="/" component={HomeContainer} queries={DefaultQuery} prepareParams={homePrepareParams} />
      </Router>
    )
  }

}