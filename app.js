const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/server";
// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();
const cors = require('cors');

// express builds folder containing the react app 
const path = require('path');
app.use(express.static(path.join(__dirname, "/client/build")));

// session configuration
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    },
    saveUninitialized: false,
    resave: true,
    store: MongoStore.create({
      mongoUrl: MONGO_URI
    })
  })
)

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);

const bcrypt = require("bcrypt");

// 👇 Start handling routes here
// Contrary to the views version, all routes are controled from the routes/index.js

app.use(
  cors({
    // this could be multiple domains/origins, but we will allow just our React app
    origin: ['http://localhost:3000']
  })
);

const crud = require("./routes/crud");
app.use("/api", crud);

const auth = require("./routes/auth");
app.use("/api/auth", auth);


app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/client/build/index.html");
});

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
