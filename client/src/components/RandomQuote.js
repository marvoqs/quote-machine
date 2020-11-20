import React from 'react';
import { useGlobalContext } from '../context';

function RandomQuote() {
  const { randomQuote, getRandomQuote, isLoading } = useGlobalContext();

  return (
    <section className='section'>
      {isLoading.randomQuote ? (
        <div className='loader'></div>
      ) : (
        <div>
          <p className='quote-text'>{randomQuote.text}</p>
          <p className='quote-author'>&mdash; {randomQuote.author}</p>
          <div className='btn-container'>
            <button className='btn' onClick={getRandomQuote}>
              new quote
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default RandomQuote;
