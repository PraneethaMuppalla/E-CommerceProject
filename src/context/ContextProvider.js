import React, { useReducer } from "react";

import WebContext from "./web-context";

const DUMMY_ITEMS = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const defaultWebContextState = {
  musicAlbums: DUMMY_ITEMS,
};
const webContextReducer = (state, action) => {
  return defaultWebContextState;
};

const ContextProvider = (props) => {
  const [webContextState, dispatchWebContext] = useReducer(
    webContextReducer,
    defaultWebContextState
  );

  const webContext = {
    musicAlbums: DUMMY_ITEMS,
  };
  return (
    <WebContext.Provider value={webContext}>
      {props.children}
    </WebContext.Provider>
  );
};

export default ContextProvider;
