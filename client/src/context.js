import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // set is loading as an object with each element loading state
  const [isLoading, setIsLoading] = useState(true);

  const getResults = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`./api/quotes?s=${query}`);
      const newResults = response.data;
      setResults(newResults);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getResults();
  }, [query]);

  return <AppContext.Provider value={{ isLoading, query, setQuery, results }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
