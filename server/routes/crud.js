const router = require("express").Router();
const StartUp = require("../models/StartUp");
const Investor = require("../models/Investor");


router.post("/signup/investor", (req, res, next) => {
  const {email, username, password, firstName, lastName} = req.body;
  Investor.create({email, username, password, firstName, lastName})
          .then(investor => {
            res.status(200).json(investor);
          })
          .catch(err=> next(err))
});

router.post("/signUp/startUp", (req, res, next) => {
  const {email, username, password, firstName, lastName} = req.body;
  Investor.create({email, username, password, firstName, lastName})
          .then(investor => {
            res.status(200).json(investor);
          })
          .catch(err=> next(err))
});


module.exports = router;
