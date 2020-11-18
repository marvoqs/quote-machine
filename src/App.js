import React from 'react';
import RandomQuote from './RandomQuote';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

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
