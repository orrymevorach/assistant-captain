import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: `https://api.baseql.com/airtable/graphql/${process.env.NEXT_PUBLIC_BASEQL_API_KEY}`,
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_BASEQL_BEARER_TOKEN}`,
    },
});
