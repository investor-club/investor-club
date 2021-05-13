const router = require("express").Router();
const StartUp = require("../models/StartUp");
const Investor = require("../models/Investor");
const bcrypt = require("bcrypt");

router.post("/signup/investor", (req, res, next) => {
  const { email, username, password, firstName, lastName } = req.body;

  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Your password has to be 8 chars min" });
  }
  if (username === "") {
    return res.status(400).json({ message: "Your username cannot be empty" });
  }

  Investor.findOne({ username: username })
    .then((investorFromDB) => {
      if (investorFromDB !== null) {
        return res
          .status(400)
          .json({ message: "This username is already taken" });
      } else {
        // the username is available
        // create password
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);
        console.log(hash);

        Investor.create({
          email,
          username,
          password: hash,
          firstName,
          lastName,
        })
          .then((investor) => {
            res.status(200).json(investor);
          })
          .catch((err) => next(err));
      }
    })
    .catch((err) => next(err));
});

router.post("/signup/startup", (req, res, next) => {
  const { companyName, email, username, password } = req.body;
  StartUp.create({
    companyName,
    email,
    username,
    password,
  });
  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Your password has to be 8 chars min" });
  }
  if (username === "") {
    return res.status(400).json({ message: "Your username cannot be empty" });
  }

  StartUp.findOne({ username: username }).then((startupFromDB) => {
    if (startupFromDB !== null) {
      return res
        .status(400)
        .json({ message: "This username is already taken" });
    } else {
      // the username is available
      // create password
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);
      console.log(hash);

      StartUp.create({ email, username, password: hash, companyName })
        .then((startup) => {
          res.status(200).json(startup);
        })
        .catch((err) => next(err));
    }
  });
});

//login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  Investor.findOne({ username: username }).then((investorFromDB) => {
    StartUp.findOne({ username: username }).then((startupFromDB) => {
      if (investorFromDB === null && startupFromDB === null) {
        // if username does not exist as investor or startup
        res.json({ message: "Login doesn't exist" });
        return;
        // username exists as an investor
      } else if (investorFromDB !== null) {
        // console.log('THIS WORKS: ', investorFromDB.password, password);
        if (bcrypt.compareSync(password, investorFromDB.password)) {
          req.session.user = investorFromDB;
          res.status(200).json({ investorFromDB });
        } else {
          res.status(400).json({ message: "Invalid credentials" });
        }
      } else {
        // username exists as an startup
        if (bcrypt.compareSync(password, startupFromDB.password)) {
          req.session.user = startupFromDB;
          res.status(200).json({ startup: startupFromDB });
        } else {
          res.status(400).json({ message: "Invalid credentials" });
        }
      }
    });
  });
});

//loggedin?
router.get("/loggedin", (req, res) => {
  console.log("this is the user from the session: ", req.session.user);
  res.json(req.session.user);
});

//logout
router.delete("/logout", (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: "Successful Logout" });
});

module.exports = router;
