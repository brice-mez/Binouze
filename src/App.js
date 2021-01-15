import React, {  createContext, useState } from 'react';
import './App.css';
import AppRouter from './router/AppRouter';

export const ShoppingCartContext = createContext();


function App() {
  const [itemsInCart, updateCart] = useState([])
  console.log("render", itemsInCart);

  

  return (
    <ShoppingCartContext.Provider value={{itemsInCart, updateCart}}>
    <div className='App'>
      <AppRouter  />
    </div>
    </ShoppingCartContext.Provider>
  );
}

export default App;
