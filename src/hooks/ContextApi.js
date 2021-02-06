import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  // const authAxios = axios.create({
  //   baseURL: apiUrl,
  //   headers: { Authorization: `Bearer ${user.jwt}` },
  // });
  async function signIn({ username, password }) {
    try {
      const response = await axios.post(
        'https://api.sandbox.v2.pedidopago.com.br/v2/agent/login',
        {
          username,
          password,
        }
      );
      localStorage.setItem('jwt', response.data.jwt);
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  async function createCategory({ logo, name, description, from }) {
    try {
      // await axios.interceptors.request.use(
      //   (config) => {
      //     config.headers.authorization = `Bearer ${user.jwt}`;
      //     return config;
      //   },
      //   (error) => {
      //     return Promise.reject(error);
      //   }
      // );
      await axios.post(
        'https://api.sandbox.v2.pedidopago.com.br/v2/store/category',
        {
          callcenter: {
            from,
            status: true,
          },
          description,
          ecommerce: {
            from,
            status: true,
          },
          keywords: ['string'],
          keywords_concat: 'string',
          logo,
          logo_content_type: 'string',
          name,
          parent_id: 0,
          position: 0,
          products: ['string'],
          store_id: 'string',
          subcategories: [
            {
              callcenter: {
                available: true,
                from,
              },
              description,
              ecommerce: {
                available: true,
                from,
              },
              keywords: ['string'],
              keywords_concat: 'string',
              logo: 'string',
              logo_content_type: 'string',
              name: 'string',
              position: 0,
              products: ['string'],
              visible: true,
            },
          ],
          visible: true,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <UserContext.Provider
      value={{
        signIn,
        user,
        createCategory,
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
