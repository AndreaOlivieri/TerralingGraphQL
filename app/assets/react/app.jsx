import React from 'react'
import Relay from 'react-relay'
import ReactDOM from 'react-dom'
import RouterApp from './router'

$(document).ready(function(){
  ReactDOM.render(<RouterApp />, document.getElementById('router-app'))
});