import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Optin.css";

class Optin extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }

  render() {
    return (
      <div className="optin">
        <p>Want to continue exploring our books </p>
        <Link to="/">
          <button onClick={() => this.modal()}>Click Me</button>
        </Link>
        <div id="modal">
          <div className="wrapper">
            <h3>Enter Your Email</h3>
            <div className="clearfix">
              <div className="col-8" />
              <div className="col-3" /> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Optin;
