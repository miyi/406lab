import React from 'react';
import { Redirect, Route, BrowserRouter, IndexRoute, Link } from 'react-router-dom';
// import App from './App';
// import Home from './Home/Home';
// import Profile from './Profile/Profile';
// import Chat from './Chat/Chat';
// import Callback from './Callback/Callback';
// import Auth from './Auth/Auth';
import history from './history';
import Layout from '../components/layout/Layout'

// const auth = new Auth();

// const handleAuthentication = (nextState, replace) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     auth.handleAuthentication();
//   }
// }

export const makeRoutes = () => {
  // return (
  //   <BrowserRouter history={history} component={Layout}>
  //       <div>
  //         <ul>
  //           <li><Link to="/netflix">Netflix</Link></li>
  //           <li><Link to="/zillow">Zillow Group</Link></li>
  //           <li><Link to="/yahoo">Yahoo</Link></li>
  //           <li><Link to="/modus">Modus Create</Link></li>
  //         </ul>
  //         <Route path="/netflix" render={(props) => <Netflix />} />
  //         <Route path="/zillow" render={(props) => <Zillow />} />
  //         <Route path="/yahoo" render={(props) => <Yahoo />} /> 
  //         <Route path="/modus" render={(props) => <Modus />} />       
  //       </div>
  //   </BrowserRouter>
  // );
  return (
    <BrowserRouter history={history}>
      <Layout/>
    </BrowserRouter>
  )
}

const Netflix = () => <div>Netlfix</div>
const Zillow = () => <div>Zillow</div>
const Yahoo = () => <div>Yahoo</div>
const Modus = () => <div>Modus</div>
