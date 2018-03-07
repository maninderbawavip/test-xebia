import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import thunk from 'redux-thunk'

import history from './history'
import reducer from './reducers'
import Login from './modules/login/loginContainer'
import Search from './modules/search/searchContainer'

import './index.css'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('username') ? <Component {...props} /> : <Redirect to='/' />
  )} />
)

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('username') ? <Redirect to='/search' /> : <Component {...props} />
  )} />
)

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */}
    <BrowserRouter history={history}>
      <div className="height100">
        <LoginRoute exact path="/" component={Login} />
        <PrivateRoute path="/search" component={Search} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

