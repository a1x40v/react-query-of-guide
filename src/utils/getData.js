const BASE_URL = 'http://localhost:3000';

export async function getData(url) {
    const response = await fetch(`${BASE_URL}/${url}`);
  
    if (!response.ok)
    {
      throw new Error("Unable to fetch")
    }
  
    const data = await response.json();
  
    return data;
  }