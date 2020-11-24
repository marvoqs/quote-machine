import React, { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);

  // set is loading as an object with each element loading state
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`./api/quotes?query=${query}&page=${page}`);
      const newResults = await response.json();
      setResults((oldResults) => {
        if (page === 0) {
          return newResults;
        } else {
          return [...oldResults, ...newResults];
        }
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    setPage(0);
    fetchData();
  }, [query]);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (!isLoading) {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
          setPage((oldPage) => oldPage + 1);
        }
      }
    });
    return () => window.removeEventListener('scroll', event);
  }, []);

  return <AppContext.Provider value={{ isLoading, query, setQuery, results }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
