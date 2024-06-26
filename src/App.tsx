import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './components/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Routes here */}
      <Home />
    </QueryClientProvider>
  );
}

export default App;
