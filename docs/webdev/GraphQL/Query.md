# Queries 

## Fetch data with the useQuery hook
This article shows how to fetch GraphQL data in React with the useQuery hook and attach the result to your UI. You'll also learn how Apollo Client simplifies data management code by tracking error and loading states for you.

## Prerequisites
This article assumes you're familiar with building basic GraphQL queries. If you need a refresher, we recommend this guide. You can also build example queries against Apollo's full-stack tutorial server.

This article also assumes that you've already set up Apollo Client and have wrapped your React app in an ApolloProvider component. For more information, see the getting started guide.

To follow along with the examples below, open up our starter project and sample GraphQL server on CodeSandbox. You can view the completed version of the app here.

## Executing a query
The useQuery React hook is the primary API for executing queries in an Apollo application. To run a query within a React component, call useQuery and pass it a GraphQL query string. When your component renders, useQuery returns an object from Apollo Client that contains loading, error, and data properties you can use to render your UI.

Let's look at an example. First, we'll create a GraphQL query named GET_DOGS. Remember to wrap query strings in the gql function to parse them into query documents:

index.js
```js
import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
```
Next, we'll create a component named Dogs. Inside it, we'll pass our GET_DOGS query to the useQuery hook:

index.js
```js
function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name='dog' onChange={onDogSelected}>
      {data.dogs.map((dog) => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}
```
As our query executes and the values of loading, error, and data change, the Dogs component can intelligently render different UI elements according to the query's state:

As long as loading is true (indicating the query is still in flight), the component presents a Loading... notice.
When loading is false and there is no error, the query has completed. The component renders a dropdown menu that's populated with the list of dog breeds returned by the server.
When the user selects a dog breed from the populated dropdown, the selection is sent to the parent component via the provided onDogSelected function.

In the next step, we'll associate the dropdown with a more sophisticated query that uses GraphQL variables.

## Caching query results
Whenever Apollo Client fetches query results from your server, it automatically caches those results locally. This makes later executions of that same query extremely fast.

To see this caching in action, let's build a new component called DogPhoto. DogPhoto accepts a prop called breed that reflects the current value of the dropdown menu in our Dogs component:

index.js
```js
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
  );
}
```

Notice that we're providing a configuration option (variables) to the useQuery hook this time. The variables option is an object that contains all of the variables we want to pass to our GraphQL query. In this case, we want to pass the currently selected breed from the dropdown.

Select bulldog from the dropdown to see its photo appear. Then switch to another breed, and then switch back to bulldog. You'll notice that the bulldog photo loads instantly the second time around. This is the cache at work!

Next, let's learn some techniques for ensuring that our cached data is fresh.

## Updating cached query results
Sometimes, you want to make sure that your query's cached data is up to date with your server's data. Apollo Client supports two strategies for this: polling and refetching.

## Polling
Polling provides near-real-time synchronization with your server by executing your query periodically at a specified interval. To enable polling for a query, pass a pollInterval configuration option to the useQuery hook with an interval in milliseconds:

index.js
```js
function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    pollInterval: 500,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
  );
}
```
By setting pollInterval to 500, we fetch the current breed's image from the server every 0.5 seconds. Note that if you set pollInterval to 0, the query does not poll.

You can also start and stop polling dynamically with the startPolling and stopPolling functions that are returned by the useQuery hook. When using these functions, set the pollInterval configuration option as a parameter of the startPolling function.

## Refetching
Refetching enables you to refresh query results in response to a particular user action, as opposed to using a fixed interval.

Let's add a button to our DogPhoto component that calls our query's refetch function whenever it's clicked.

You can optionally provide a new variables object to the refetch function. If you avoid passing a variables object and use only refetch(), the query uses the same variables that it used in its previous execution.

index.js
```js
function DogPhoto({ breed }) {
  const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      <button onClick={() => refetch({ breed: 'new_dog_breed' })}>
        Refetch new breed!
      </button>
    </div>
  );
}
```
Click the button and notice that the UI updates with a new dog photo. Refetching is an excellent way to guarantee fresh data, but it introduces some complexity with loading state. In the next section, we'll cover strategies for handling complex loading and error state.

Providing new variables to refetch
You call refetch with a new set of variables like so:
```jsx
<button
  onClick={() =>
    refetch({
      breed: 'dalmatian', // Always refetches a dalmatian instead of original breed
    })
  }
>
  Refetch!
</button>
```
If you provide new values for some of your original query's variables but not all of them, refetch uses each omitted variable's original value.

Inspecting loading states
We've already seen that the useQuery hook exposes our query's current loading state. This is helpful when a query first loads, but what happens to our loading state when we're refetching or polling?

Let's return to our refetching example from the previous section. If you click the refetch button, you'll see that the component doesn't re-render until the new data arrives. What if we want to indicate to the user that we're refetching the photo?

The useQuery hook's result object provides fine-grained information about the status of the query via the networkStatus property. To take advantage of this information, we set the notifyOnNetworkStatusChange option to true so our query component re-renders while a refetch is in flight:

index.js
```js
import { NetworkStatus } from '@apollo/client';

function DogPhoto({ breed }) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      notifyOnNetworkStatusChange: true,
    }
  );

  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      <button onClick={() => refetch({ breed: 'new_dog_breed' })}>
        Refetch!
      </button>
    </div>
  );
}
```
Enabling this option also ensures that the value of loading updates accordingly, even if you don't want to use the more fine-grained information provided by the networkStatus property.

The networkStatus property is a NetworkStatus enum that represents different loading states. Refetch is represented by NetworkStatus.refetch, and there are also values for polling and pagination. For a full list of all the possible loading states, check out the source.

To view a complete version of the app we just built, check out the CodeSandbox here.

## Inspecting error states
You can customize your query error handling by providing the errorPolicy configuration option to the useQuery hook. The default value is none, which tells Apollo Client to treat all GraphQL errors as runtime errors. In this case, Apollo Client discards any query response data returned by the server and sets the error property in the useQuery result object.

If you set errorPolicy to all, useQuery does not discard query response data, allowing you to render partial results.

For more information, see Handling operation errors.

Manual execution with useLazyQuery
When React renders a component that calls useQuery, Apollo Client automatically executes the corresponding query. But what if you want to execute a query in response to a different event, such as a user clicking a button?

The useLazyQuery hook is perfect for executing queries in response to events besides component rendering. Unlike with useQuery, when you call useLazyQuery, it does not immediately execute its associated query. Instead, it returns a query function in its result tuple that you call whenever you're ready to execute the query.

Here's an example:

index.js
```js
import React from 'react';
import { useLazyQuery } from '@apollo/client';

function DelayedQuery() {
  const [getDog, { loading, error, data }] = useLazyQuery(GET_DOG_PHOTO);

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error}`;

  return (
    <div>
      {data?.dog && <img src={data.dog.displayImage} />}
      <button onClick={() => getDog({ variables: { breed: 'bulldog' } })}>
        Click me!
      </button>
    </div>
  );
}
```

The first item in useLazyQuery's return tuple is the query function, and the second item is the same result object returned by useQuery.

As shown above, you can pass options to the query function just like you pass them to useLazyQuery itself. If you pass a particular option to both, the value you pass to the query function takes precedence. This is a handy way to pass default options to useLazyQuery and then customize those options in the query function.

For a full list of supported options, see the API reference.

Setting a fetch policy
By default, the useQuery hook checks the Apollo Client cache to see if all the data you requested is already available locally. If all data is available locally, useQuery returns that data and doesn't query your GraphQL server. This cache-first policy is Apollo Client's default fetch policy.

You can specify a different fetch policy for a given query. To do so, include the fetchPolicy option in your call to useQuery:

```js
const { loading, error, data } = useQuery(GET_DOGS, {
  fetchPolicy: 'network-only', // Doesn't check cache before making a network request
});
```
nextFetchPolicy
You can also specify a query's nextFetchPolicy. If you do, fetchPolicy is used for the query's first execution, and nextFetchPolicy is used to determine how the query responds to future cache updates:
```js
const { loading, error, data } = useQuery(GET_DOGS, {
  fetchPolicy: 'network-only', // Used for first execution
  nextFetchPolicy: 'cache-first', // Used for subsequent executions
});
```
For example, this is helpful if you want a query to always make an initial network request, but you're comfortable reading from the cache after that.

nextFetchPolicy functions
If you want to apply a single nextFetchPolicy by default, because you find yourself manually providing nextFetchPolicy for most of your queries, you can configure defaultOptions.watchQuery.nextFetchPolicy when creating your ApolloClient instance:
```js
new ApolloClient({
  link,
  client,
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy: 'cache-only',
    },
  },
});
```
This configuration applies to all client.watchQuery calls and useQuery calls that do not otherwise configure nextFetchPolicy.

If you want more control over how nextFetchPolicy behaves, you can provide a function instead of a WatchQueryFetchPolicy string:

```js
new ApolloClient({
  link,
  client,
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy(currentFetchPolicy) {
        if (
          currentFetchPolicy === 'network-only' ||
          currentFetchPolicy === 'cache-and-network'
        ) {
          // Demote the network policies (except "no-cache") to "cache-first"
          // after the first request.
          return 'cache-first';
        }
        // Leave all other fetch policies unchanged.
        return currentFetchPolicy;
      },
    },
  },
});
```
This nextFetchPolicy function will be called after each request, and uses the currentFetchPolicy parameter to decide how to modify the fetch policy.

In addition to being called after each request, your nextFetchPolicy function will also be called when variables change, which by default resets the fetchPolicy to its initial value, which is often important to trigger a fresh network request for queries that started out with cache-and-network or network-only fetch policies.

To intercept and handle the variables-changed case yourself, you can use the NextFetchPolicyContext object passed as the second argument to your nextFetchPolicy function:

```js
new ApolloClient({
  link,
  client,
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy(
        currentFetchPolicy,
        {
          // Either "after-fetch" or "variables-changed", indicating why the
          // nextFetchPolicy function was invoked.
          reason,
          // The rest of the options (currentFetchPolicy === options.fetchPolicy).
          options,
          // The original value of options.fetchPolicy, before nextFetchPolicy was
          // applied for the first time.
          initialPolicy,
          // The ObservableQuery associated with this client.watchQuery call.
          observable,
        }
      ) {
        // When variables change, the default behavior is to reset
        // options.fetchPolicy to context.initialPolicy. If you omit this logic,
        // your nextFetchPolicy function can override this default behavior to
        // prevent options.fetchPolicy from changing in this case.
        if (reason === 'variables-changed') {
          return initialPolicy;
        }

        if (
          currentFetchPolicy === 'network-only' ||
          currentFetchPolicy === 'cache-and-network'
        ) {
          // Demote the network policies (except "no-cache") to "cache-first"
          // after the first request.
          return 'cache-first';
        }

        // Leave all other fetch policies unchanged.
        return currentFetchPolicy;
      },
    },
  },
});
```
In order to debug these nextFetchPolicy transitions, it can be useful to add console.log or debugger statements to the function body, to see when and why the function is called.

Supported fetch policies
NAME	DESCRIPTION
cache-first
Apollo Client first executes the query against the cache. If all requested data is present in the cache, that data is returned. Otherwise, Apollo Client executes the query against your GraphQL server and returns that data after caching it.

Prioritizes minimizing the number of network requests sent by your application.

This is the default fetch policy.

cache-only
Apollo Client executes the query only against the cache. It never queries your server in this case.

A cache-only query throws an error if the cache does not contain data for all requested fields.

cache-and-network
Apollo Client executes the full query against both the cache and your GraphQL server. The query automatically updates if the result of the server-side query modifies cached fields.

Provides a fast response while also helping to keep cached data consistent with server data.

network-only
Apollo Client executes the full query against your GraphQL server, without first checking the cache. The query's result is stored in the cache.

Prioritizes consistency with server data, but can't provide a near-instantaneous response when cached data is available.

no-cache
Similar to network-only, except the query's result is not stored in the cache.

standby
Uses the same logic as cache-first, except this query does not automatically update when underlying field values change. You can still manually update this query with refetch and updateQueries.

useQuery API
Supported options and result fields for the useQuery hook are listed below.

Most calls to useQuery can omit the majority of these options, but it's useful to know they exist. To learn about the useQuery hook API in more detail with usage examples, see the API reference.