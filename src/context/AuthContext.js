import React, { createContext } from 'react';
import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated,
    loading,
    handleLogin,
    handleLogout,
    userId,
    userName,
  } = useAuth();

  return (
    <Context.Provider
      value={{
        authenticated,
        handleLogin,
        loading,
        handleLogout,
        userId,
        userName,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
