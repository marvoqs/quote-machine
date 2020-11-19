import React from 'react';
import RandomQuote from './components/RandomQuote';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <main className='wrapper'>
      <div className='container'>
        <h1 className='title'>Quote Machine</h1>
        <RandomQuote />
        <SearchForm />
        <SearchResults />
      </div>
    </main>
  );
}

export default App;
