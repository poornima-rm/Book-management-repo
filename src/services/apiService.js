// Mock API functions (simulating external API)
const mockBooks = [
  { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', publishedYear: 1925, status: 'Available' },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', publishedYear: 1960, status: 'Issued' },
  { id: '3', title: '1984', author: 'George Orwell', genre: 'Dystopian', publishedYear: 1949, status: 'Available' },
  { id: '4', title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', publishedYear: 1813, status: 'Available' },
  { id: '5', title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', publishedYear: 1951, status: 'Issued' },
  { id: '6', title: 'Lord of the Flies', author: 'William Golding', genre: 'Adventure', publishedYear: 1954, status: 'Available' },
  { id: '7', title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', publishedYear: 1937, status: 'Available' },
  { id: '8', title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Science Fiction', publishedYear: 1953, status: 'Issued' },
  { id: '9', title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'Romance', publishedYear: 1847, status: 'Available' },
  { id: '10', title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy', publishedYear: 1954, status: 'Available' },
  { id: '11', title: 'Brave New World', author: 'Aldous Huxley', genre: 'Science Fiction', publishedYear: 1932, status: 'Issued' },
  { id: '12', title: 'The Chronicles of Narnia', author: 'C.S. Lewis', genre: 'Fantasy', publishedYear: 1950, status: 'Available' },
  { id: '13', title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'Romance', publishedYear: 1847, status: 'Available' },
  { id: '14', title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', publishedYear: 1988, status: 'Issued' },
  { id: '15', title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy', publishedYear: 1997, status: 'Available' }
];

const apiService = {
  getBooks: () => new Promise(resolve => setTimeout(() => resolve([...mockBooks]), 800)),
  createBook: (book) => new Promise(resolve => {
    setTimeout(() => {
      const newBook = { ...book, id: Date.now().toString() };
      mockBooks.push(newBook);
      resolve(newBook);
    }, 500);
  }),
  updateBook: (id, book) => new Promise(resolve => {
    setTimeout(() => {
      const index = mockBooks.findIndex(b => b.id === id);
      if (index !== -1) {
        mockBooks[index] = { ...book, id };
        resolve(mockBooks[index]);
      }
    }, 500);
  }),
  deleteBook: (id) => new Promise(resolve => {
    setTimeout(() => {
      const index = mockBooks.findIndex(b => b.id === id);
      if (index !== -1) {
        mockBooks.splice(index, 1);
      }
      resolve(true);
    }, 500);
  })
};

export default apiService;
