import React, { useState } from "react";

import Header from "./components/Header/Header";
import Store from "./components/Store/Store";
import ContextProvider from "./context/ContextProvider";
import GenericsHeader from "./components/GenericsHeader/GenericsHeader";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const showCartHandler = () => {
    setCartVisible(true);
  };
  const hideCartHandler = () => {
    setCartVisible(false);
  };

  return (
    <ContextProvider>
      <Header onShowCart={showCartHandler} />
      {cartVisible && <Cart onHideCart={hideCartHandler} />}
      <main>
        <GenericsHeader />
        <Store />
        <Footer />
      </main>
    </ContextProvider>
  );
}

export default App;
