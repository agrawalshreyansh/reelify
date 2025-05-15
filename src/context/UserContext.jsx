import React, { createContext, useEffect, useState } from 'react';


const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
