// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        "justify-content": "center"
      }}
    >
      {!isAuthenticated && (
        <button
          style={{
            height: "100px",
            width: "200px",
            "background-color": "red",
            "font-size": "20px"
          }}
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {/* NEW - add a link to the home and profile pages */}
      {isAuthenticated && (
        <span>
          <Link
            style={{
              "font-size": "20px",
              "margin-right": "20px",
              "margin-left": "20px"
            }}
            to="/"
          >
            Home
          </Link>
          &nbsp;
          <Link style={{ "font-size": "20px" }} to="/profile">
            Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;
