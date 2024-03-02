import React, { useReducer } from "react";

import WebContext from "./web-context";

const DUMMY_ITEMS = [
  {
    id: 0,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 1,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 2,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 3,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const defaultWebContextState = {
  cartItems: [],
  totalAmount: 0,
};
const webContextReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const idx = state.cartItems.findIndex((each) => each.id === action.id);
    let updatedItems = [...state.cartItems];
    let newAmount = state.totalAmount;
    if (idx === -1) {
      const item = DUMMY_ITEMS.find((each) => each.id === action.id);
      updatedItems.push({
        ...item,
        quantity: 1,
      });
      newAmount += item.price;
    }
    return { cartItems: updatedItems, totalAmount: newAmount };
  }
  if (action.type === "REMOVE_ITEM") {
    const item = DUMMY_ITEMS.find((each) => each.id === action.id);
    const filteredCart = state.cartItems.filter(
      (each) => each.id !== action.id
    );
    let newAmount = state.totalAmount - item.price;
    return { cartItems: filteredCart, totalAmount: newAmount };
  }

  return { ...defaultWebContextState };
};

const ContextProvider = (props) => {
  const [webContextState, dispatchWebContext] = useReducer(
    webContextReducer,
    defaultWebContextState
  );
  const addToCartHandler = (id) => {
    const idx = webContextState.cartItems.findIndex((each) => each.id === id);
    if (idx !== -1) {
      alert("Item already present in cart");
      return;
    }
    dispatchWebContext({
      type: "ADD_ITEM",
      id,
    });
  };

  const removeFromCartHandler = (id) => {
    dispatchWebContext({
      type: "REMOVE_ITEM",
      id,
    });
  };
  const webContext = {
    musicAlbums: DUMMY_ITEMS,
    cartItems: webContextState.cartItems,
    addToCart: addToCartHandler,
    deleteFromCart: removeFromCartHandler,
    totalAmount: webContextState.totalAmount,
  };
  return (
    <WebContext.Provider value={webContext}>
      {props.children}
    </WebContext.Provider>
  );
};

export default ContextProvider;
