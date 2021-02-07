import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [category, setCategory] = useState([]);
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

  async function getCategory() {
    try {
      const response = await axios.get(
        `https://api.sandbox.v2.pedidopago.com.br/v2/store/category/${2}`
      );
      setCategory(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  async function editCategory(
    categoryId,
    ecommerceVisible,
    callcenterIsVisible,
    ecommerceDate,
    callcenterDate,
    new_logo_image,
    name,
    description,
    visible
  ) {
    try {
      await axios.put(
        `https://api.sandbox.v2.pedidopago.com.br/v2/store/category/${categoryId}`,
        {
          add_products: ['string'],
          callcenter: {
            from: callcenterDate,
            status: callcenterIsVisible,
          },
          delete_logo: true,
          delete_products: ['string'],
          description,
          ecommerce: {
            from: ecommerceDate,
            status: ecommerceVisible,
          },
          keywords: ['string'],
          keywords_concat: 'string',
          name,
          new_logo_content_type: 'string',
          new_logo_image,
          position: 0,
          replace_products: ['string'],
          visible,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteCategory(categoryId) {
    try {
      await axios.delete(
        `https://api.sandbox.v2.pedidopago.com.br/v2/store/category/${categoryId}`
      );
      setCategory([]);
      // setCategory(category.filter((category) => category.id !== categoryId));
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
        getCategory,
        category,
        editCategory,
        deleteCategory,
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
