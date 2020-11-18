import React, { useState, useEffect, useContext } from 'react';
import { quotes } from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState({ id: 0, text: '', author: '' });

  const getRandomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    if (randomQuote.id === quotes[random].id) {
      return getRandomQuote();
    }
    setRandomQuote(quotes[random]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return <AppContext.Provider value={{ randomQuote, getRandomQuote }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
