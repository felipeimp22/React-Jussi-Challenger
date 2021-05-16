import React from 'react';
import Context from './Context';
import useStorage from '../../utils/useStorage';

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage('token');
  const [email, setEmail] = useStorage('token');
  const [items, setItems] = useStorage('items');


  return (
    <Context.Provider
      value={{
        token,
        setToken,
        email,
        setEmail,
        items,
        setItems

      }}
    >
      {children}
    </Context.Provider>
  )
}


export default StoreProvider;
