import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserInfoProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  let  [wallets, setWallets] = useState([]);
  const [userId, setUid] = useState(null);


  const login = (userInfo) => {
    setIsLoggedIn(true);
    setUsername(userInfo.username);
    setEmail(userInfo.email);
    setWallets(userInfo.wallets)
    setUid(userInfo.uid)
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername(null);
    setEmail(null);
    setWallets([]);
    setUid(null);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, email,wallets,setWallets, userId, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useUser = () => useContext(UserContext);
