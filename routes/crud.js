const router = require("express").Router();
const StartUp = require("../models/StartUp");
const Investor = require("../models/Investor");

// all startups
router.get("/startups", (req, res, next) => {
  StartUp.find()
    .then((response) => {
      //console.log("STARTUP LIST: ", response)
      res.json(response);
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

// update a startup
router.put("/startups/:id", (req, res, next) => {
  const { companyName, email, username, password } = req.body;
  StartUp.findByIdAndUpdate(
    req.params.id,
    { companyName, email, username, password },
    { new: true }
  )
    .then((startup) => {
      res.status(200).json(startup);
    })
    .catch((err) => {
      next(err);
    });
});

// delete startup
router.delete("/startups/:id", (req, res, next) => {
  StartUp.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "startup deleted" });
    })
    .catch((err) => {
      next(err);
    });
});

// all investors
router.get("/investors", (req, res, next) => {
  Investor.find()
    .then((investor) => {
      res.json(investor);
    })
    .catch((err) => {
      next(err);
    });
});

// specific investor
router.get("/investors/:id", (req, res, next) => {
  Investor.findById(req.params.id)
    .then((investor) => {
      if (!investor) {
        res.status(404).json(investor);
      } else {
        res.status(200).json(investor);
      }
    })
    .catch((err) => {
      next(err);
    });
});

// specific investor
router.get("/investors/portfolio/:id", (req, res, next) => {
  Investor.findById(req.params.id)
    .populate("inPortfolio")
    .then((investor) => {
      if (!investor) {
        res.status(404).json(investor);
      } else {
        res.status(200).json(investor);
      }
    })
    .catch((err) => {
      next(err);
    });
});

// update ivestor
router.put("/investors/:id", (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    username,
    password,
    industry,
    location,
    bio,
  } = req.body;
  //console.log("REQ BODY UPDATE INVESTOR",req.body);
  Investor.findByIdAndUpdate(
    req.params.id,
    { firstName, lastName, email, username, password, industry, location, bio },
    { new: true }
  )
    .then((investor) => {
      //console.log("INVESTOR UPDATED ", investor)
      res.status(200).json(investor);
    })
    .catch((err) => {
      next(err);
    });
});

//update investor portfolio
router.put("/investors/portfolio/:id", (req, res, next) => {
  const { startupToAdd } = req.body;
  console.log("STARTUP TO ADD REQ BODY ", req.body);
  Investor.findByIdAndUpdate(
    req.params.id,
    {
      $push: { inPortfolio: startupToAdd },
    },
    { new: true }
  )
    .then((investor) => {
      console.log("PORTFOLIO UPDATED ", investor);
      res.status(200).json(investor);
    })
    .catch((err) => {
      next(err);
    });
});

// delete investor
router.delete("/investors/:id", (req, res, next) => {
  Investor.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "investor deleted" });
    })
    .catch((err) => {
      next(err);
    });
});

//update statupEval
router.post("/startups/:id", (req, res, next) => {
  const {
    place,
    industry,
    stage,
    foundation,
    teamMembers,
    skillsI,
    skillsII,
    skillsIII,
    experience,
    pitchDeck,
  } = req.body;
  //console.log("UPDATE STARTUP: ", req.body)
  StartUp.findByIdAndUpdate(
    req.params.id,
    {
      place,
      industry,
      stage,
      foundation,
      teamMembers,
      skillsI,
      skillsII,
      skillsIII,
      experience,
      pitchDeck,
    },
    { new: true }
  )
    .then((startup) => {
      //console.log("startup",startup);
      res.status(200).json(startup);
    })
    .catch((err) => {
      console.log("err", error);
    });
});

//update/count the rating
router.put("/startups/:id/rating", (req, res, next) => {
  const { rating } = req.body;
  console.log("REQ BODY FOR RATING ", req.body);
  StartUp.findByIdAndUpdate(
    req.params.id,
    {
      rating: rating,
    },
    { new: true }
  )
    .then((investor) => {
      console.log("STARTUP RATED ", investor);
      res.status(200).json(investor);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
