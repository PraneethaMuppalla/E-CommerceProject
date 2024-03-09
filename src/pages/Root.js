import React, { useContext } from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import GenericsHeader from "../components/GenericsHeader/GenericsHeader";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";
import classes from "./Root.module.css";
import WebContext from "../context/web-context";

const Root = () => {
  const ctx = useContext(WebContext);
  return (
    <div>
      <Header isCartVisible={true} />
      {ctx.cartVisible && <Cart onHideCart={ctx.hideCart} />}
      <main className={classes.container}>
        <GenericsHeader />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Root;
