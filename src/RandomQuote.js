import React, { useState, useEffect } from 'react';
import { quotes } from './data';

function RandomQuote() {
  const [quote, setQuote] = useState({ id: 0, text: '', author: '' });

  const getRandomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    if (quote.id === quotes[random].id) {
      return getRandomQuote();
    }
    setQuote(quotes[random]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <section className='section'>
      <p className='quote-text'>{quote.text}</p>
      <p className='quote-author'>&#8212; {quote.author}</p>
      <div className='btn-container'>
        <button className='btn' onClick={getRandomQuote}>
          new quote
        </button>
      </div>
    </section>
  );
}

export default RandomQuote;
