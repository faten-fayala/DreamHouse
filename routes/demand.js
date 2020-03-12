const express = require("express");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
// const User = require("../models/User");
const router = express.Router();
const Demand = require("../models/Demand");

// public route
// Get demande admin
router.get("/", (req, res) => {
  Demand.find()
    .then(demande => res.json(demande))
    .catch(err => console.log(err.message));
});
// private route
// add demand
router.post(
  "/",
  [
    auth,
    [
      check("piece", "You have to choose the piece to redecorate")
        .not()
        .isEmpty(),
      check("styledemanded", "You have to choose your prefered style")
        .not()
        .isEmpty(),
      check("gamme", "Please choose your range")
        .not()
        .isEmpty(),
      check("color", "Colors is required")
        .not()
        .isEmpty(),
      check("thespace", "Please choose who you want to share this room with")
        .not()
        .isEmpty(),
      check("actualpiece", "Enter what your actual piece look like")
        .not()
        .isEmpty(),
      check("inspiration", "Give us an inspiration")
        .not()
        .isEmpty(),
      check(
        "speceficdemand",
        "If you have a specefic thing , please mention it here"
      )
        .not()
        .isEmpty()
    ]
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    const {
      piece,
      styledemanded,
      gamme,
      inspiration,
      speceficdemand,
      actualpiece,
      thespace,
      color
    } = req.body;


    const newDemand = new Demand({
      piece,
      styledemanded,
      gamme,
      inspiration,
      speceficdemand,
      actualpiece,
      thespace,
      color,
      user: req.user.id
    });

    newDemand
      .save()
      .then(demand => res.json(demand))
      .catch(err => console.log(err.message));
  }
);
// private route
// delete demand
router.delete("/:id", auth, (req, res) => {
  Music.findById(req.params.id)
    .then(demand => {
      if (!demand) {
        return res.json({ msg: "Demand not found" });
      } else if (demand.user.toString() !== req.user.id) {
        res.json({ msg: "not authorized" });
      } else {
       Demand.findByIdAndDelete(req.params.id, (err, data) => {
          res.json({ msg: "Demand Deleted" });
        });
      }
    })
    .catch(err => console.log(err.message));
});
// private route
// update demand
router.put("/:id", (req, res) => {
  const {
    confirmed,
    denied } = req.body;
  // Build a demand object
  let demandFields = {};
  demandFields.confirmed = confirmed;
  demandFields.denied = denied;

  // if (piece) demandFields.piece = piece;
  // if (styledemanded) demandFields.styledemanded = styledemanded;
  // if (gamme) demandFields.gamme = gamme;
  // if (inspiration) demandFields.inspiration = inspiration;
  // if (speceficdemand) demandFields.speceficdemand = speceficdemand;
  // if (actualpiece) demandFields.actualpiece = actualpiece;
  // if (thespace) demandFields.thespace = thespace;
  // if (color) demandFields.color = color;

  Demand.findById(req.params.id)
    .then(demand => {
      if (!demand) {
        return res.json({ msg: "demand not found" });
      // } else if (demand.user.toString() !== req.user.id) {
      //   res.json({ msg: "not authorized" });
      } else {
        Demand.findByIdAndUpdate(
          req.params.id,
          { $set: {...demandFields} },
          (err, data) => {
            res.json({ msg: "Demand Updated" });
          }
        );
      }
    })
    .catch(err => console.log(err.message));
});

module.exports = router;
