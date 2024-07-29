export async function getDataFake(bookId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: bookId,
          title: `Book Title ${bookId} --- ${Math.random()}`,
          authors: ['Author 1', 'Author 2'],
          thumbnail: 'https://via.placeholder.com/200x200',
        });
      }, 1000);
    })
  }