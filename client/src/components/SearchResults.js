import React from 'react';
import { useGlobalContext } from '../context';

function SearchResults() {
  const { isLoading, results } = useGlobalContext();
  return (
    <section>
      {isLoading ? (
        <div className='loader'></div>
      ) : (
        <div className='results-grid'>
          {results.map((item) => (
            <article key={item._id} className='box quote-box'>
              <div>
                <p className='quote-text'>{item.text}</p>
                <p className='quote-author'>&mdash; {item.author}</p>
              </div>
              <div className='quote-buttons'>
                <a class='twitter-share-button' href='https://twitter.com/intent/tweet?text=Hello%20world'>
                  Tweet
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default SearchResults;
