import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'normalize.css/normalize.css';
import registerServiceWorker from './registerServiceWorker';

import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const httpLink = createHttpLink({ uri: 'https://api.graph.cool/simple/v1/cj9xhcv7502ko01631q4a3h3h' });

const middlewareLink = setContext(() => ({
  headers: { 
    authorization: localStorage.getItem('graphcoolToken') || null,
  }
}));

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