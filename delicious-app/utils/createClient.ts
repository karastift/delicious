import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://192.168.178.61:4000/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
});