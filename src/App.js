import React from "react";

import Header from "./components/Header/Header";
import Store from "./components/Store/Store";
import ContextProvider from "./context/ContextProvider";
import GenericsHeader from "./components/GenericsHeader/GenericsHeader";

function App() {
  return (
    <ContextProvider>
      <Header />
      <GenericsHeader />
      <Store />
    </ContextProvider>
  );
}

export default App;
