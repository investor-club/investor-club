import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import "../App.css";

export default function Navbar(props) {
  //console.log("User in navbar: ", props);

  const handleLogout = () => {
    logout().then(() => {
      props.setAppState(null, null);
    });
  };

  const toggleLanding = () => {
    props.toggleLanding();
  };

  let dashboardLink;
  if (props.type === "investor") {
    dashboardLink = "/investordashboard";
  }
  if (props.type === "startup") {
    dashboardLink = "/startupdashboard";
  }

  let favourites;
  if (props.type === "investor") {
    favourites = "/favourites";
  }

  let portfolio;
  if (props.type === "investor") {
    portfolio = "/portfolio";
  }

  let profileLink;
  if (props.type === "investor") {
    profileLink = "/investor/profile";
  }
  if (props.type === "startup") {
    profileLink = "/startup/profile";
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
              <Link to={dashboardLink}>Dashboard</Link>
              <Link to={profileLink}>Profile</Link>
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
