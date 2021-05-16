import { createContext } from 'react';

const StoreContext = createContext({
  items: [],
  token: null,
  email: null,
  setToken: () => { },
  setEmail: () => { },
  setItems: () => { },


});

export default StoreContext;
