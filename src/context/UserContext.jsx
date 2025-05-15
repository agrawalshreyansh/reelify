import React, { createContext, useEffect, useState } from 'react';
import useFetchData from '../hooks/useFetchData';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
  const storedUser = JSON.parse(localStorage.getItem('user')) || null;
  const [user, setUser] = useState(storedUser);
  const [isLoggedIn, setIsLoggedIn] = useState(!!storedUser);

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
