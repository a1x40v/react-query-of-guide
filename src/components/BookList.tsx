import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getData } from '../utils/getData';
import AuthorTabs, { authors } from './AuthorTabs';

function useBooksByAuthor(author) {
  return useQuery({
    queryKey: ['books', { author }],
    queryFn: () => getData(`/books/author=${author}`),
  });
}

function useBookDetails(bookId) {
  return useQuery({
    queryKey: ['books', { bookId }],
    queryFn: () => getData(`/books/${bookId}`),
  });
}

const BookList = () => {
  const [author, setAuthor] = useState(authors[0]);

  return (
    <div>
      <p>BookList</p>
      <AuthorTabs selectedAuthor={author} setSelectedAuthor={setAuthor} />
    </div>
  );
};

export default BookList;
