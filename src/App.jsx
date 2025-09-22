
import React from 'react';
import { BookProvider } from './context/BookContext';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <BookProvider>
      <Dashboard />
    </BookProvider>
  );
};

export default App;
