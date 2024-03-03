import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import GenericsHeader from "../components/GenericsHeader/GenericsHeader";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";
import classes from "./Root.module.css";

const Root = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const showCartHandler = () => {
    setCartVisible(true);
  };
  const hideCartHandler = () => {
    setCartVisible(false);
  };
  return (
    <div>
      <Header onShowCart={showCartHandler} />
      {cartVisible && <Cart onHideCart={hideCartHandler} />}
      <main className={classes.container}>
        <GenericsHeader />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Root;
