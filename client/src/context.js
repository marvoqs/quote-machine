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

  const getRandomQuote = async () => {
    try {
      const response = await axios.get('./api/quotes/random');
      const newRandomQuote = response.data[0];
      if (newRandomQuote._id === randomQuote._id) {
        return getRandomQuote();
      }
      setRandomQuote(newRandomQuote);
    } catch (error) {
      console.log(error);
    }
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
