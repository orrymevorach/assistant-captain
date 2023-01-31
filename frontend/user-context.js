'use client';
import { useContext, createContext } from 'react';

export const UserContext = createContext(null);

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { useUser };
