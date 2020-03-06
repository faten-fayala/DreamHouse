const express = require("express");

const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const jwtSecret = "secret";
// Register user
router.post(
  "/",
  [
    check("firstname", "please enter your first name")
      .not()
      .isEmpty(),
    check("lastname", "please enter your last name")
      .not()
      .isEmpty(),
    check("email", "please enter a valid email").isEmail(),
    check("password", "Password must be 6 or more charachters")
      .not()
      .isEmpty()
      .isLength({ min: 6 }),
    check("adress", "please enter your adress")
      .not()
      .isEmpty(),
    check("gender", "please enter your gender ")
      .not()
      .isEmpty(),
    check("birthday", "please enter your birthday")
      .not()
      .isEmpty(),
    check("phone", "please enter your phone number")
      .not()
      .isEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    const {
      firstname,
      lastname,
      email,
      password,
      adress,
      gender,
      birthday,
      phone
    } = req.body;
    User.findOne({ email })
      .then(user => {
        if (user) {
          res.status(400).json({ msg: "User already exists" });
        } else {
          user = new User({
            firstname,
            lastname,
            email,
            password,
            adress,
            gender,
            birthday,
            phone
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hashedPassword) => {
              user.password = hashedPassword;
              user.save();

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
            });
          });
        }
      })
      .catch(err => console.log(err.message));
  }
);

module.exports = router;
