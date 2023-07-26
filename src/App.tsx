import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchProvider from './context/SearchContext';

function App() {
  return (
    <SearchProvider>
      <Navbar />
      <Home />
    </SearchProvider>
  );
}

export default App;
