import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Book from './components/Book.jsx';

const queryClient = new QueryClient();

function App() {
  const [selectedBookId, setSelectedBookId] = useState("1");

  return (
    <QueryClientProvider client={queryClient}>
      <div>
      <header>Query Library</header>
      <div>
        <select value={selectedBookId} onChange={(e) => setSelectedBookId(e.target.value)}>
          <option value="1">The Hobbit</option>
          <option value="2">The Fellowship Of The Ring</option>
          <option value="3">The Two Towers</option>
        </select>
      </div>
        </div>
      <Book bookId={selectedBookId} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
