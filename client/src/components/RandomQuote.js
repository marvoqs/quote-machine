import React from 'react';
import { useGlobalContext } from '../context';

function RandomQuote() {
  const { randomQuote, getRandomQuote, isLoading } = useGlobalContext();

  return (
    <section className='section'>
      {isLoading ? (
        <div class='loader'></div>
      ) : (
        <div>
          <p className='quote-text'>{randomQuote.text}</p>
          <p className='quote-author'>&#8212; {randomQuote.author}</p>
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
