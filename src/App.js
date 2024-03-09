import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Root from "./pages/Root";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/store/:productId",
        element: <ProductDetails />,
      },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
