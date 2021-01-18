import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import './index.css';
import './assets/variables.css';

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  uri: 'http://localhost:4000/graphql',
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache'
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
