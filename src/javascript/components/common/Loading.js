import React from "react";
import Loader from "react-loader-spinner";

export default function LoaderComponent() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div style={style}>
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />{" "}
      </div>
    </>
  );
}
