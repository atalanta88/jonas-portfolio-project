import React from "react";
import Loader from "react-loader-spinner";

export default function LoaderComponent() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20vh",
    paddingBottom: "20vh",
  };

  return (
    <>
      <div style={style}>
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />{" "}
      </div>
    </>
  );
}
