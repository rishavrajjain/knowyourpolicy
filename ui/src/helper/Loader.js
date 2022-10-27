import React from "react";

export default function Loader() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "5rem" }}
    >
      <div className="col-sm-6 text-center">
        <p>Loading ...</p>
        <div className="loader4"></div>
      </div>
    </div>
  );
}
