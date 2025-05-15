import { useState } from 'react';
import { fetchData } from '../services/api';

const useFetchData = (endpoint, withCredentials = false) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const [loading, setLoading] = useState(false);  // Add loading state

  const fetch = async () => {
    setLoading(true);
    try {
      const result = await fetchData(endpoint, withCredentials);
      if (result.status === 200) {
        setStatusCode(200);
        setResponse(result.data);
      } else {
        setStatusCode(result.status);
        setError(result.error);
      }
    } catch (err) {
      console.log(err)
      setError(err.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return { statusCode, response, error, loading, fetch };  // Return loading state
};

export default useFetchData;
