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

// update ivestor
router.put("/investors/:id", (req, res, next) => {
  const { firstName, lastName, email, username, password } = req.body;
  console.log("REQ BODY ",req.body);
  Investor.findByIdAndUpdate(
    req.params.id,
    { firstName, lastName, email, username, password },
    { new: true }
  )
    .then((investor) => {
      console.log("INVESTOR UPDATED ", investor)
      res.status(200).json(investor);
    })
    .catch((err) => {
      next(err);
    });
});

//update investor portfolio
router.put("/investors/portfolio/:id", (req, res, next) => {
  const { startupToAdd } = req.body;
 // console.log("REQ BODY ",req.body);
  Investor
    .findByIdAndUpdate( req.params.id, {
      $push: 
        {inPortfolio: startupToAdd}
    }, 
        { new: true }
    )
    .then((investor) => {
      console.log("PORTFOLIO UPDATED ", investor)
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

//get startup data from database
router.get("/startup/:id", (req, res, next) => {
  StartUp.findById(req.params.id)
    .then((startup) => {
      console.log("get startup comp mount", startup);
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

//update statupEval
router.post("/startup/:id", (req, res, next) => {
  const {place, 
    industry, 
    stage,
    foundation,
    teamMembers,
    skillsI,
    skillsII,
    skillsIII,
    experience,
    pitchDeck
  } = req.body;
  console.log("called post in backend", req.body)
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
      pitchDeck
    },
    { new: true}
    )
      .then(startup => {
        console.log("startup",startup);
        res.status(200).json(startup);
      })
      .catch(err => {
        console.log("err", error)
      });
      
      })




module.exports = router;
