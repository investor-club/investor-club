import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import "../App.css";

export default function Navbar(props) {
  console.log("User in navbar: ", props);

  const handleLogout = () => {
    logout().then(() => {
      console.log("LOGGING OUT??");
      props.setAppState(null, null);
    });
  };

  let dashboard;
  if (props.type === "investor") {
    dashboard = "/investordashboard";
  }
  if (props.type === "startup") {
    dashboard = "/startupdashboard";
  }

  // let profile;
  // if (props.user.type === "investor") {
  //   profile = "/investor/profile";
  // }
  // if (props.user.type === "startup") {
  //   profile = "/startup/profile";
  // }

  return (
    <div id="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {props.user ? (
          <>
            <li>
              <Link to={dashboard}>Dashboard</Link>
            </li>
            {/* <li>
              <Link to={profile}>Profile</Link>
            </li> */}
            <li>
              <Link to="/" onClick={() => handleLogout()}>
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
