import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

// const api = axios.create({
//   baseURL: './api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState({ _id: 0, text: '', author: '' });
  const [isLoading, setIsLoading] = useState(false);

  const getRandomQuote = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('./api/quotes/random');
      const newRandomQuote = response.data;
      if (newRandomQuote.id === randomQuote.id) {
        return getRandomQuote();
      }
      setRandomQuote(newRandomQuote);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return <AppContext.Provider value={{ isLoading, randomQuote, getRandomQuote }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
