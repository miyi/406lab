import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import history from 'history/createBrowserHistory'
import s from './App.css'
import Layout from './layout/Layout'
import Trial from './map/Trial'

export const makeRoutes = () => (
  <Router history={history}>
    <div className={s.map}>
      <Route exact path='/' component={Trial}/>
    </div>
  </Router>
)