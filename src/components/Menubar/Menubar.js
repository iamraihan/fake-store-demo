import React from "react";
import "./Menubar.css";

const Menubar = () => {
  return (
    <div>
      <div className="container-fluid p-4 bg-light">
        <div className="row d-flex justify-content-between">
          <div className="col-md-2">Logo</div>
          <div className="col-md-10 items d-flex justify-content-end">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/home">About</a>
            </li>
            <li>
              <a href="/home">Cart</a>
            </li>
            <li>
              <a href="/home">Others</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
