import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import "../App.css";

export default function Navbar(props) {
  console.log("User in navbar: ", props);

  const handleLogout = () => {
    logout().then(() => {
      console.log("LOGGING OUT??")
      props.setAppState(null, null);
    });
  };

 
  let dashboard;
  if (props.type ==="investor") { dashboard = "/investordashboard"}
  if (props.type ==="startup") { dashboard = "/startupdashboard"}
  
  return (
    <div>
      <div id='navbarContainer'>
        <div id='clubLogo'>  
          <Link to="/">Investment Club</Link> 
        </div>  
          {/* If we have a logged in user -> show projects and logout otherwise show login and signup */}
        <div id='navbar'> 
            {props.user ? (
              <>          
                <Link to={dashboard}>Dashboard</Link>
                <Link to="/" onClick={() => handleLogout()}>Logout</Link>  
              </>
            ) : (
              <>       
                <Link to="/login">Login</Link>  
                <Link className='purple-attention' to="/signupchoice">Signup</Link>       
              </>
            )}
        </div>
      </div>
      <hr id='navLine'/>
      {/* <div id='line'></div> */}
    </div>
    
  );
}
