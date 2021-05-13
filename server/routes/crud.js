const router = require("express").Router();
const StartUp = require("../models/StartUp");
const Investor = require("../models/Investor");

// all startups
router.get("/startups", (req, res, next) => {
  StartUp.find()
    .then((startUp) => {
      res.json(startUp);
    })
    .catch((err) => {
      next(err);
    });
});

// specific startup
router.get("/startups/:id", (req, res, next) => {
  StartUp.findById(req.params.id)
    .then((startup) => {
      if (!startup) {
        res.status(404).json(startup);
      } else {
        res.status(200).json(startup);
      }
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
