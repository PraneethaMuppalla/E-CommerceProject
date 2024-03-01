import React from "react";

import Header from "./components/Header/Header";
import Store from "./components/Store/Store";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Store />
    </ContextProvider>
  );
}

export default App;
