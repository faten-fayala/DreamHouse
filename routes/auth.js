const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const jwtSecret = "secret";
const auth =require('../middleware/auth')

// Get the user logged in
// private route
router.get("/", auth,(req, res) => {
  User.findById(req.user.id)
  .then(user=> res.json(user))
  .catch(err=>console.log(err.message))
});









// login the user
router.post(
  "/",
  [
    check("email", "please enter a valid email").isEmail(),
    check("password", "Password is required").isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { password, email } = req.body;
      
    User.findOne({ email })
      .then(user => {
        if (!user) {
          return res.status(400).json({ msg: "please register before" });
        } else {
          // comparing the passwords
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              console.log(err.message);
            
            } else if (isMatch) {
              
              const payload = {
                user: {
                  id: user.id
                }
              };
              jwt.sign(
                payload,
                jwtSecret,
                { expiresIn: 3600000 },
                (err, token) => {
                  if (err) throw err;
                  res.json({ token });
                }
              );
            } else {
              return res.status(400).json({ msg: "wrong password" });
            }
          });
        }
      })
      .catch(err => {
        console.error(err.message)
        res.status(500).send('Server error')
    })
  }
);

module.exports = router;