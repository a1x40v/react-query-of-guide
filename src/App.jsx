import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Book from './components/Book.jsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Book />
    </QueryClientProvider>
  );
}

export default App;
