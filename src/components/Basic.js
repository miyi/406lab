import React from 'react'
import {
  BrowserRouter as Router,
  IndexRoute,
  Route,
  Link
} from 'react-router-dom'

// import Layout from './Layout/Layout'
import New from './newComponent/New'
import New2 from './newComponent/New2'
import Layout from './layout/Layout'

const BasicExample = () => (
  <Router>
	  <div>
	  	<Route path='/' component={Layout}/>
		<Route path='/' component={New}/>
		<Route path='/new' component={New2}/>
	  </div>

  </Router>
)

export default BasicExample