import React, { Suspense } from 'react';

import './App.css';
import { RecipeList } from './components/RecipeList';

import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import { createHttpLink } from 'apollo-link-http';

const client = new ApolloClient({
    link: createHttpLink({
        uri: `${process.env.REACT_APP_API}/graphql`,
        useGETForQueries: true
    }),
    cache: new InMemoryCache()
});

const App: React.FC = () => {
    console.log(process.env.REACT_APP_API);

    return (
        <div className="App">
            <ApolloProvider client={client}>
                <Suspense fallback={<div>Loading App...</div>}>
                    <RecipeList />
                </Suspense>
            </ApolloProvider>
        </div>
    );
}

export default App;
