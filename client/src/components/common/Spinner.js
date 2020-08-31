import React from "react";
import spinner from "../../images/others/loading.gif";
const Spinner = () => {
  return (
    <div style={{ paddingTop: "10px" }} className="mx-auto">
      <img
        src={spinner}
        alt="loading..."
        style={{ margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
