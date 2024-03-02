import React from "react";

const WebContext = React.createContext({
  musicAlbums: [],
  cartItems: [],
  totalAmount: 0,
  addToCart: (item) => {},
  deleteFromCart: (id) => {},
});

export default WebContext;
