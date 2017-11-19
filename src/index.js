import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'normalize.css/normalize.css';
import registerServiceWorker from './registerServiceWorker';

//apollo2.0
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cj9xhcv7502ko01631q4a3h3h' });

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

render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
	, document.getElementById('root'));
registerServiceWorker();