import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://turfvi.app/graphql', 
  }),
  cache: new InMemoryCache(),
});

export default client;