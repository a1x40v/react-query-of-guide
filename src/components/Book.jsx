import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { getData } from '../utils/getData';
import {
  BackgroundUpdateInProgress,
  StaleMessage,
  UpToDate,
} from './MessageComponents';

function useBook(bookId) {
  return useQuery({
    queryKey: ['book', bookId],
    queryFn: () => getData(bookId),
    staleTime: 5000,
  });
}

const CheckoutMessage = ({ isFetching, isStale, refetch }) => {
  if (isFetching) {
    return <BackgroundUpdateInProgress />;
  }

  if (isStale) {
    return <StaleMessage refetch={refetch} />;
  }

  return <UpToDate />;
};

const Book = ({ bookId }) => {
  const { data, isPending, isError, isFetching, isStale, refetch } =
    useBook(bookId);

  if (isError) {
    return <div>Error fetching book data.</div>;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <img src={data.thumbnail} alt={data.title} width="200" />
      </div>
      <div>
        <h2>{data.title}</h2>
        <small>{data.author}</small>
      </div>
      <div className="checkout-wrapper">
        <button>Check Out</button>
        <CheckoutMessage
          isFetching={isFetching}
          isStale={isStale}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default Book;
