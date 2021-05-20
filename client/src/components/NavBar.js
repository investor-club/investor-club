import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import "../App.css";

export default function Navbar(props) {
  //console.log("User in navbar: ", props);

  const handleLogout = () => {
    logout().then(() => {
      console.log("LOGGING OUT??");
      props.setAppState(null, null);
    });
  };

  const toggleLanding = () => {
    props.toggleLanding();
  };

  let dashboard;
  if (props.type === "investor") {
    dashboard = "/investordashboard";
  }
  if (props.type === "startup") {
    dashboard = "/startupdashboard";
  }

  let favourites;
  if (props.type === "investor") {
    favourites = "/favourites";
  }

  let portfolio;
  if (props.type === "investor") {
    portfolio = "/portfolio";
  }

  let profile;
  if (props.type === "investor") {
    profile = "/investor/profile/";
  }
  if (props.type === "startup") {
    profile = "/startup/profile";
  }

  return (
    <div>
      <div id="navbarContainer" className="bodyPadding">
        <div id="clubLogo">
          <Link to="/">Investment Club</Link>
        </div>
        <div id="navbar">
          {props.type === "investor" ? (
            <>
              <Link to="/startuplist">Startups</Link>
              <Link to={portfolio}>Portfolio</Link>
              <Link to={favourites}>Favourites</Link>
            </>
          ) : (
            <></>
          )}
          {props.user ? (
            <>
              <Link to={dashboard}>Dashboard</Link>
              <Link to={profile}>Profile</Link>
              <Link to="/" onClick={() => handleLogout()}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link className="purple-attention" to="/signupchoice">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
      <hr id="navLine" />
      {/* <div id='line'></div> */}
    </div>
  );
}
