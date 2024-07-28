import React from 'react';
import { useQuery } from '@tanstack/react-query';

async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'The Hobbit',
        authors: ['J.R.R. Tolkien'],
        thumbnail: 'https://ui.dev/images/courses/query/hobbit.jpg',
      });
    }, 1000);
  });
}

function useBook() {
  return useQuery({
    queryKey: ['book'],
    queryFn: getData,
  });
}

const Book = () => {
  const { data, isLoading, isError } = useBook();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching book data.</div>;
  }

  return (
    <div>
      <header>Query Library</header>
      <div>
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div>
        <h2>{data.title}</h2>
        <small>{data.authors.join(', ')}</small>
      </div>
    </div>
  );
};

export default Book;
