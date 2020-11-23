import React from 'react';
import { useGlobalContext } from '../context';

function SearchForm() {
  const { query, setQuery } = useGlobalContext();

  return (
    <section className='box'>
      <input
        className='search-input'
        type='text'
        name='search'
        autoComplete='off'
        placeholder='what are you looking for?'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </section>
  );
}

export default SearchForm;
