// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

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
      mongoUrl: "mongodb://localhost/server"
    })
  })
)

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);

const bcrypt = require("bcrypt");

// session configuration
// const session = require('express-session');
// const MongoStore = require('connect-mongo');

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24
//     },
//     saveUninitialized: false,
//     resave: true,
//     store: MongoStore.create({
//       mongoUrl: "mongodb://localhost/server"
//     })
//   })
// )
// end of session

// 👇 Start handling routes here
// Contrary to the views version, all routes are controled from the routes/index.js

const crud = require("./routes/crud");
app.use("/api", crud);

const auth = require("./routes/auth");
app.use("/api/auth", auth);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
