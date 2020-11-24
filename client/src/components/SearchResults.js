import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import { useGlobalContext } from '../context';

function SearchResults() {
  const { isLoading, results } = useGlobalContext();
  return (
    <section>
      <div className='results-grid'>
        {results.map((item) => {
          const shareText = `${item.text} — ${item.author}`;
          return (
            <article key={item._id} className='box quote-box'>
              <div>
                <p className='quote-text'>{item.text}</p>
                <p className='quote-author'>&mdash; {item.author}</p>
              </div>
              <div className='quote-buttons'>
                <TwitterShareButton title={shareText} url={'https://ms-quotemachine.herokuapp.com/'}>
                  <TwitterIcon className='share-button' size={24} />
                </TwitterShareButton>
                <FacebookShareButton quote={shareText} url={'https://ms-quotemachine.herokuapp.com/'}>
                  <FacebookIcon className='share-button' size={24} />
                </FacebookShareButton>
              </div>
            </article>
          );
        })}
      </div>
      {isLoading && <div className='loader'></div>}
    </section>
  );
}

export default SearchResults;
