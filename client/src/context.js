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
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // set is loading as an object with each element loading state
  const [isLoading, setIsLoading] = useState({ randomQuote: false, results: false });

  const getRandomQuote = async () => {
    setIsLoading({ ...isLoading, randomQuote: true });
    try {
      const response = await axios.get('./api/quotes/random');
      const newRandomQuote = response.data;
      if (newRandomQuote._id === randomQuote._id) {
        return getRandomQuote();
      }
      setRandomQuote(newRandomQuote);
      setIsLoading({ ...isLoading, randomQuote: false });
    } catch (error) {
      console.log(error);
    }
  };

  const getResults = async () => {
    setIsLoading({ ...isLoading, results: true });
    try {
      const response = await axios.get(`/api/quotes?s=${query}`);
      const newResults = response.data;
      setResults(newResults);
      setIsLoading({ ...isLoading, results: false });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    getResults();
  }, [query]);

  return <AppContext.Provider value={{ isLoading, randomQuote, getRandomQuote, query, setQuery, results }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
