import React from "react";

const Main = ({ mainRef }) => {
  return (
    <div
      id="main"
      ref={mainRef}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></div>
  );
};

export default Main;
