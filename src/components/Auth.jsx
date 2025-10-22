import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import useFetchData from '../hooks/useFetchData.js';

const AuthInitializer = () => {
  const { setUser, setIsLoggedIn, setAuthLoading } = useContext(UserContext);
  const { statusCode, response, loading, fetch } = useFetchData('users/authenticateStatus', true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Only initialize once
    if (!initialized) {
      setInitialized(true);
      fetch();
    }
  }, [initialized, fetch]);

  useEffect(() => {
    // Wait for the fetch to complete (loading becomes false)
    if (!loading && initialized) {
      if (statusCode === 200 && response) {
        setUser(response);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
      setAuthLoading(false);
    }
  }, [loading, statusCode, response, initialized, setUser, setIsLoggedIn, setAuthLoading]);

  return null;
};

export default AuthInitializer;
