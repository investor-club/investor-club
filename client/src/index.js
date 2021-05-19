import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios
  .get("/api/auth/loggedin")
  .then((response) => {
    const session = response.data;
    // console.log("AM I YOUR INDEX TYPE ?", session.type); THIS ONE WORKS
    ReactDOM.render(
      <BrowserRouter>
        <App user={session.user} type={session.type} />
      </BrowserRouter>,
      document.getElementById("root")
    );
  })
  .catch((err) => {
    console.log(err);
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();