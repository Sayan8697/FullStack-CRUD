import { Button } from "bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="img/images.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
          Capgemini Dashboard
          
          </a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="btn btn-outline-light" to="/addUsers"> Add User</Link>
          <button className="btn btn-outline-dark"> Remove User</button>
        </div>
        
      </nav>
    </div>
  );
}
