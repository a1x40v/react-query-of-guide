import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import BookList from './components/BookList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header>Query Library</header>
        <BookList />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
