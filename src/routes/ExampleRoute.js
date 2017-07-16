import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import history from './history'

const makeRoutes = () => (
  <Router history={history}>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li><Link to="/netflix">Netflix</Link></li>
        <li><Link to="/zillow">Zillow Group</Link></li>
        <li><Link to="/yahoo">Yahoo</Link></li>
        <li><Link to="/modus">Modus Create</Link></li>
      </ul>

      <Route path="/:id" component={Child}/>
      <Route path="/netflix" component={Netflix}/>
      <Route path="/zillow" component={Zillow}/>
      <Route path="/yahoo" component={Yahoo}/>
      <Route path="/modus" component={Modus}/>

    
    </div>
  </Router>
)

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

const Netflix = () => <div>Netlfix</div>
const Zillow = () => <div>Zillow</div>
const Yahoo = () => <div>Yahoo</div>
const Modus = () => <div>Modus</div>

export default makeRoutes