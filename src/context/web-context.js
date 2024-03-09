import React from "react";

const WebContext = React.createContext({
  musicAlbums: [],
  cartItems: [],
  totalAmount: 0,
  addToCart: (item) => {},
  deleteFromCart: (id) => {},
  showCart: () => {},
  hideCart: () => {},
  cartVisible: false,
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export default WebContext;
