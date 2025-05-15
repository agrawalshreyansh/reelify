import React, { createContext, useEffect, useState } from 'react';
import useFetchData from '../hooks/useFetchData';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
  const storedUser = JSON.parse(localStorage.getItem('user')) || null;
  const [user, setUser] = useState(storedUser);
  const [isLoggedIn, setIsLoggedIn] = useState(!!storedUser);

  const { statusCode, response, error, fetch } = useFetchData('users/authenticateStatus', true);

  useEffect(() => {
      fetch()
      if (statusCode === 200) {
        setUser(response);
        setIsLoggedIn(true);
      } 
  }, []);
  

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
