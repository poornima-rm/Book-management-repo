import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/apiService';
import Toast from '../components/Toast';

const BookContext = createContext();

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used within BookProvider');
  }
  return context;
};

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [toast, setToast] = useState(null);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    setLoading(true);
    try {
      const data = await apiService.getBooks();
      setBooks(data);
    } catch (error) {
      showToast('Failed to load books', 'error');
    }
    setLoading(false);
  };

  const addBook = async (bookData) => {
    const newBook = await apiService.createBook(bookData);
    setBooks(prev => [...prev, newBook]);
  };

  const updateBook = async (id, bookData) => {
    const updatedBook = await apiService.updateBook(id, bookData);
    setBooks(prev => prev.map(book => book.id === id ? updatedBook : book));
  };

  const deleteBook = async (id) => {
    await apiService.deleteBook(id);
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <BookContext.Provider value={{
      books,
      loading,
      searchTerm,
      setSearchTerm,
      genreFilter,
      setGenreFilter,
      statusFilter,
      setStatusFilter,
      addBook,
      updateBook,
      deleteBook,
      showToast
    }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </BookContext.Provider>
  );
};

export default BookContext;
