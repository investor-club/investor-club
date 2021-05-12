const router = require("express").Router();
const StartUp = require("../models/StartUp");
const Investor = require("../models/Investor");

router.post("/signup/investor", (req, res, next) => {
  const { email, username, password, firstName, lastName } = req.body;
  Investor.create({ email, username, password, firstName, lastName })
    .then((investor) => {
      res.status(200).json(investor);
    })
    .catch((err) => next(err));
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
    .then((startUp) => {
      res.status(200).json(startUp);
    })
    .catch((err) => next(err));
});

module.exports = router;
