const router = require("express").Router();
const StartUp = require("../models/StartUp");
const Investor = require("../models/Investor");

//login


router.post('/login', (req, res) => {
  const { username, password } = req.body;
  Investor.findOne({ username: username })
    .then(ownerFromDB => {
      StartUp.findOne({ username: username })
         .then(walkerFromDB => {
            if (ownerFromDB === null && walkerFromDB === null) {
                // if username does not exist as owner or walker
                res.render('login', { message: 'Invalid login or password' });
                return;
            } else if (ownerFromDB !== null) {
                if (bcrypt.compareSync(password, ownerFromDB.password)) {
                    req.session.user = ownerFromDB;
                    res.render('owner/find-walkers', { owner: ownerFromDB });
                    res.redirect('/owner/find-walkers');
                  } else {
                    res.render('login', { message: 'Invalid login or password' });
                  } 
            } else {
                // username exists as an walker
                if (bcrypt.compareSync(password, walkerFromDB.password)) {
                  req.session.user = walkerFromDB;
                    res.render('walker/incoming-requests', { walker: walkerFromDB });
                    res.redirect('/walker/incoming-requests');
                  } else {
                    res.render('login', { message: 'Invalid login or password' });
                  } 
            }
            
         })
    })

})


//loggedin?
router.get('/loggedin', (req, res) => {
  console.log('this is the user from the session: ', req.session.user);
  res.json(req.session.user);
})

//logout
router.delete('/logout', (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: 'Successful Logout' });
})

module.exports = router;