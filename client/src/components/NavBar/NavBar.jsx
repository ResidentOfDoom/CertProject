// src/components/NavBar/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

//App.js has a card coded user. in order to check his credentials to display
//his certificates, we need to check

const NavBar = ({ cookieValue }) => {
  const hasCookie = !!cookieValue;
  const isAdmin = cookieValue?.candidateNumber !== 0;

  return (
    <>
      <nav>
        <div className="navbar-brand">CertShop</div>
        <div className="nav-menu">
          <ul className="nav-menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Certificates">Certificates</Link>
            </li>
            <li>
              <Link to="/Certificatestatus">poutsaki</Link>
            </li>

            <li>
              {hasCookie && isAdmin && (
                <Link to="/MyCertificates">My Certificates</Link>
              )}
              {!isAdmin && <Link to="/Admin">Admin Panel</Link>}
            </li>

            <li className="login-icon">
              <div className="dropdown">
                <button className="dropbtn user-icon">&#128512;</button>
                <div className="dropdown-content">
                  {!cookieValue ? (
                    <div>
                      <Link to="/Login">Log In</Link>
                      <Link to="/SignUp">Sign Up</Link>
                    </div>
                  ) : (
                    <div>
                      <Link to="/MyProfile">My Profile</Link>
                      <Link to="/Logout">Log Out</Link>
                    </div>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
