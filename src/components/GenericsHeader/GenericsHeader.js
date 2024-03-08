import React from "react";
import { useLocation } from "react-router-dom";

import classes from "./GenericsHeader.module.css";

const GenericsHeader = () => {
  const location = useLocation();

  if (location.pathname.includes("/store/")) {
    return null;
  }
  return (
    <div className={classes.container}>
      <h1>The Generics</h1>
    </div>
  );
};

export default GenericsHeader;
