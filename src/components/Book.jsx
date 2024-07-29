import React from 'react';
import { useQuery } from '@tanstack/react-query';

const BASE_URL = 'http://localhost:3000';

async function getData() {
  const url = `${BASE_URL}/books/1`;

  const response = await fetch(url);

  if (!response.ok)
  {
    throw new Error("Unable to fetch")
  }

  const data = await response.json();

  return data;
}

function useBook() {
  return useQuery({
    queryKey: ['book'],
    queryFn: getData,
  });
}

const Book = () => {
  const { data, isPending, isError } = useBook();

  if (isError) {
    return <div>Error fetching book data.</div>;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>Query Library</header>
      <div>
        <img src={data.thumbnail} alt={data.title} width="200" />
      </div>
      <div>
        <h2>{data.title}</h2>
        <small>{data.authors.join(', ')}</small>
      </div>
    </div>
  );
};

export default Book;
