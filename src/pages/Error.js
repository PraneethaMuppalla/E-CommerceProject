import React from "react";

import Header from "../components/Header/Header";

const Error = () => {
  return (
    <>
      <Header isCartVisible={false} />
      <main
        style={{
          minHeight: "70vh",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1>Could not find the page!</h1>
      </main>
    </>
  );
};

export default Error;
