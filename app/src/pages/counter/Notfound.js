import React from "react";

import Preloader from "./Preholder/Preloader";
import Optin from "./Optin/Optin";

import "./styles.css";

function Notfound() {
  return (
    <div>
      <div className="here">
        <div className="container">
          <h1>
            Feature
            <br />
            Coming Soon
          </h1>

          <Optin />
          <Preloader />
        </div>
      </div>
    </div>
  );
}

export default Notfound;
