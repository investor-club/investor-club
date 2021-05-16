import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";



export default function Navbar(props) {
  console.log("User in navbar: ", props.user);

  const handleLogout = (props) => {
    logout().then(() => {
      props.updateState(null);
    });
  };

  
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* If we have a logged in user -> show projects and logout otherwise show login and signup */}
        {props.user ? (
          <>
            <li>
              <Link to="/startups">Startups</Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleLogout(props)}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signupchoice">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
