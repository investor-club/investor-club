const router = require("express").Router();
const StartUp = require("../models/StartUp");
const Investor = require("../models/Investor");
const bcrypt = require("bcrypt");

router.post("/investors", (req, res, next) => {
  console.log(req.body);
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

        Investor.create({
          email,
          username,
          password: hash,
          firstName,
          lastName,
        })
          .then((investor) => {
            console.log("I'M NEW: ", investor)
            res.status(200).json(investor);
          })
          .catch((err) => next(err));
      }
    })
    .catch((err) => next(err));
});

router.post("/startups", (req, res, next) => {
  const { companyName, email, username, password } = req.body;
  
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

      StartUp.create({ 
        email, 
        username, 
        password: hash, 
        companyName,
        place: "",
        industry: "", 
        stage: ""})
        .then((startup) => {
          console.log(startup)
          res.status(200).json(startup);
        })
        .catch((err) => next(err));
    }
  });
});

//login
router.post("/login", (req, res) => {
  const { username: useremail, password } = req.body;
  //console.log("BODY TO DESTRUCTURE: ", req.body)
  Investor.findOne( { $or: [ { username: useremail}, {email: useremail } ] })
    .then((investorFromDB) => {
    StartUp.findOne( { $or: [{ username: useremail}, {email: useremail }] } )
      .then((startupFromDB) => {
        if (investorFromDB === null && startupFromDB === null) {
          // if username does not exist as investor or startup
          res.json({ message: "Login doesn't exist" });
          return;
          // username exists as an investor
        } else if (investorFromDB !== null) {
          // console.log('THIS WORKS: ', investorFromDB.password, password);
          if (bcrypt.compareSync(password, investorFromDB.password)) {
            req.session.user = investorFromDB;
            req.session.type = "investor";
            //console.log("LOGGEIN IN AS INVESTOR ", req.session)
            res.status(200).json({ user: investorFromDB, type:"investor" });
          } else {
            res.status(400).json({ message: "Invalid credentials" });
          }
        } else {
          // username exists as an startup
          if (bcrypt.compareSync(password, startupFromDB.password)) {
            req.session.user = startupFromDB;
            req.session.type = "startup";
            //console.log("LOGGED IN IN AS STARTUP", req.session.user)
            res.status(200).json({ user: startupFromDB, type:"startup" });
          } else {
            res.status(400).json({ message: "Invalid credentials" });
          }
        }
      });
    });
});

//loggedin?
router.get("/loggedin", (req, res) => {
  //console.log("this is the loggedin check: ", req.session);
  res.json(req.session);
});

//logout
router.delete("/logout", (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: "Successful Logout" });
});

module.exports = router;
