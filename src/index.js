import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import New from './components/NewComponent/Facebook'
import Map from './components/map/Map'
import 'normalize.css/normalize.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//apollo2.0
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { GRAPHCOOL_SERVICE_ID } from './constants'

const GC_Simple_Endpoint = 'https://api.graph.cool/simple/v1/'.concat(GRAPHCOOL_SERVICE_ID)
const httpLink = new HttpLink({ uri: GC_Simple_Endpoint });

const middlewareLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('graphcoolToken')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    }
  }
});

// use with apollo-client
const link = middlewareLink.concat(httpLink);
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

render((
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} />
          <Route path="/map" component={Map} />
          <Route path="/new" component={New}/>        
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  ), document.getElementById('root'));
registerServiceWorker();