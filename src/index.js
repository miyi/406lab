import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'normalize.css/normalize.css';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cj9oxv7as1acx0147kmqph1d6' }),
  cache: new InMemoryCache()
});

render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
	, document.getElementById('root'));
registerServiceWorker();