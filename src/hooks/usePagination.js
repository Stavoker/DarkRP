import { useEffect, useRef, useState } from 'react';
import { useDebounce } from './useDebounce.js';

export const usePagination = (fetchFunction, itemsPerPage = 10, debounceDelay = 500) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);

  const debouncedSearchValue = useDebounce(searchValue, debounceDelay);

  const fetchFunctionRef = useRef(fetchFunction);
  useEffect(() => {
    fetchFunctionRef.current = fetchFunction;
  }, [fetchFunction]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchFunctionRef.current(currentPage, itemsPerPage, debouncedSearchValue);
        setData(result.data || []);
        setTotalItems(result.total || 0);
      } catch (err) {
        if (err.name === 'TypeError' && err.message.includes('fetch')) {
          setError('Network error: Cannot connect to API server. Make sure the server is running.');
        } else {
          setError(err.message || 'Failed to fetch data');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, debouncedSearchValue, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
    setCurrentPage(1);
  };

  return {
    currentPage,
    searchValue,
    data,
    loading,
    error,
    totalItems,
    totalPages,
    itemsPerPage,
    handlePageChange,
    handleSearchChange,
    setCurrentPage,
  };
};
