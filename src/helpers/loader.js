import React from "react";
import ReactLoading from "react-loading";
// import "./styles.css";

const Loader = ({ type }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <ReactLoading
        height="60px"
        width="60px"
        type={type || "bubbles"}
        color="#172337"
      />
    </div>
  );
};

export default Loader;
