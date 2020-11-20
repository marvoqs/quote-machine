import React from 'react';
import { useGlobalContext } from '../context';

function SearchResults() {
  const { isLoading, results } = useGlobalContext();
  return (
    <section className='section'>
      {isLoading.results ? (
        <div className='loader'></div>
      ) : (
        results.map((item) => (
          <article key={item._id}>
            <p className='quote-text'>{item.text}</p>
            <p className='quote-author'>&mdash; {item.author}</p>
          </article>
        ))
      )}
    </section>
  );
}

export default SearchResults;
