import React from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <main className='wrapper'>
      <div className='container'>
        <h1 className='title'>Quote Machine</h1>
        <SearchForm />
        <SearchResults />
      </div>
    </main>
  );
}

export default App;
