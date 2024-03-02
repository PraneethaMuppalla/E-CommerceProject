import React from "react";

import Header from "./components/Header/Header";
import Store from "./components/Store/Store";
import ContextProvider from "./context/ContextProvider";
import GenericsHeader from "./components/GenericsHeader/GenericsHeader";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ContextProvider>
      <Header />
      <GenericsHeader />
      <About />
      <Footer />
    </ContextProvider>
  );
}

export default App;
