import { useState } from 'react';
import { patchData } from '../services/api';

const usePatchData = (endpoint, withCredentials = false) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetch = async (body = {}) => {
    setLoading(true);
    try {
      const result = await patchData(endpoint, body, withCredentials);
      if (result.status === 200) {
        setStatusCode(200);
        setResponse(result.data);
      } else {
        setStatusCode(result.status);
        setError(result.error);
      }
    } catch (err) {
      console.log(err);
      setError(err.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return { statusCode, response, error, loading, fetch };
};

export default usePatchData;