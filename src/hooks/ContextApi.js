import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isSigned, setIsSigned] = useState(false);
  async function signIn({ username, password }) {
    try {
      const response = await axios.post(
        'https://api.sandbox.v2.pedidopago.com.br/v2/agent/login',
        {
          username,
          password,
        }
      );
      setUser(response.data);
      setIsSigned(true);
    } catch (err) {
      console.log(err);
      setIsSigned(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        signIn,
        isSigned: isSigned,
        setIsSigned,
        user: user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('User must be used within an UserProvider');
  }

  return context;
}
