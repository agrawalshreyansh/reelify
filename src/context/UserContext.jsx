import React, { createContext, useState } from 'react';


const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [authLoading, setAuthLoading] = useState(true); // Track auth initialization

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, setIsLoggedIn, authLoading, setAuthLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
