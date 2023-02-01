'use client';
import useAuth from 'hooks/useAuth';
import { useContext, createContext, useState } from 'react';

const UserContext = createContext(null);

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  useAuth({ setUser });
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { useUser, UserContextProvider, UserContext };
