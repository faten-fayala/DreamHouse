// const express = require("express");
// const auth = require("../middleware/auth");
// const User = require("../models/User");
// const router = express.Router();
// const Cart = require("../models/Cart");

// //  public route
// // Get cart admin
// router.get("/", (req, res) => {
//   Cart.find()
//     .then(cart => res.json(cart))
//     .catch(err => console.log(err.message));
// });

// // private route
// // add a cart
// router.post("/",auth,(req, res) => {
    
//       const {
//         cart
//       } = req.body;
  
  
//       const newCart = new Cart({
//                   cart,
//         user: req.user.id
//       });
  
//       newCart
//         .save()
//         .then(order => res.json(order))
//         .catch(err => console.log(err.message));
//     }
//   );