import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WebContext from "./context/web-context";
import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Root from "./pages/Root";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";
import Error from "./pages/Error";

const routerWhileLoggedIn = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
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
const routerWhileLoggedOut = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
function App() {
  const ctx = useContext(WebContext);
  return (
    <>
      {!ctx.isLoggedIn && <RouterProvider router={routerWhileLoggedOut} />}
      {ctx.isLoggedIn && <RouterProvider router={routerWhileLoggedIn} />}
    </>
  );
}

export default App;
