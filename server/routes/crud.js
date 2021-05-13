const router = require("express").Router();
const StartUp = require("../models/StartUp");
const Investor = require("../models/Investor");
const bcrypt = require("bcrypt");


router.post("/signup/investor", (req, res, next) => {
    const {email, username, password, firstName, lastName} = req.body;

    if (password.length < 8) {
      return res.status(400).json({ message: 'Your password has to be 8 chars min' });
    }
    if (username === '') {
      return res.status(400).json({ message: 'Your username cannot be empty' });
    }
    
    Investor
      .findOne({ username: username })
      .then(investorFromDB => {
        if (investorFromDB !== null) {
          return res.status(400).json({ message: 'This username is already taken' });
        } else {
          // the username is available
          // create password
          const salt = bcrypt.genSaltSync();
          const hash = bcrypt.hashSync(password, salt);
          console.log(hash);

        Investor.create({email, username, password, firstName, lastName})
                .then(investor => {
                  res.status(200).json(investor);
                })
                .catch(err=> next(err))
        }    
      });
});


router.post("/signup/startup", (req, res, next) => {
  const {
    companyName,
    email,
    username,
    password,
    dateRegistered,
    industry,
    stage,
    foundation,
    teamMembers,
    skillsAvailable,
    skillsComplete,
    skillsNeeded,
    experience,
    location,
  } = req.body;
  StartUp.create({
    companyName,
    email,
    username,
    password,
    dateRegistered,
    industry,
    stage,
    foundation,
    teamMembers,
    skillsAvailable,
    skillsComplete,
    skillsNeeded,
    experience,
    location,
  })
  if (password.length < 8) {
    return res.status(400).json({ message: 'Your password has to be 8 chars min' });
  }
  if (username === '') {
    return res.status(400).json({ message: 'Your username cannot be empty' });
  }
  
  StartUp
    .findOne({ username: username })
    .then(startupFromDB => {
      if (startupFromDB !== null) {
        return res.status(400).json({ message: 'This username is already taken' });
      } else {
        // the username is available
        // create password
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);
        console.log(hash);

      StartUp.create({email, username, password, firstName, lastName})
              .then(startup => {
                res.status(200).json(startup);
              })
              .catch(err=> next(err))
      }    
    });
});

module.exports = router;
