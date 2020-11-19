import React from 'react';

function SearchForm() {
  return (
    <section className='section'>
      <input className='search-input' type='text' name='search' autoComplete='off' placeholder='what are you looking for?' />
    </section>
  );
}

export default SearchForm;
