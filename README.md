## setting up tanstack query

#### install

npm i @tanstack/react-query
npm i -D @tanstack/eslint-plugin-query

##### create query client @app in Route

```js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient(); // to pass to QueryClientProvider

<QueryClientProvider client={queryClient}>
  {/* Routes here */}
  <Route />
</QueryClientProvider>;
```

#### useQuery - for fetching

```js
import { useQuery } from '@tanstack/react-query';

const {
  data: todos,
  isError,
  isLoading,
} = useQuery({
  queryFn: () => fetchTodos(),
  queryKey: ['todos'], // for caching
});
```

# Continuation

https://www.youtube.com/watch?v=8K1N3fE-cDs&list=PLApy4UwQM3UqAkfITNFzlqoD__UI6X5pb&index=4 @Chapter 4
