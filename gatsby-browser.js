import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './src/state/createStore'
import initialState from './src/state/initialState.js'

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore(initialState)

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}

exports.clientEntry = function() {
  require('es6-object-assign').polyfill()
}
