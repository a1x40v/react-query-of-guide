const BASE_URL = 'http://localhost:3000';

export async function getData(bookId) {
    const url = `${BASE_URL}/books/${bookId}`;
  
    const response = await fetch(url);
  
    if (!response.ok)
    {
      throw new Error("Unable to fetch")
    }
  
    const data = await response.json();
  
    return data;
  }