import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserInfoProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [wallets, setWallets] = useState([]);


  

  const login = (userInfo) => {
    setIsLoggedIn(true);
    setUsername(userInfo.username);
    setEmail(userInfo.email);
    setWallets(userInfo.wallets)
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername(null);
    setEmail(null);
    setWallets([]);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, email,wallets, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useUser = () => useContext(UserContext);
