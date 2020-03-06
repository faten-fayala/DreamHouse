const express=require("express")
const router=express.Router()
const Product = require("../models/Product")
router.get("/",(req,res)=> {
    res.send("hello")

 })
 
// Get all Products
router.get('/products', (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => console.error(err.message))
})
// Create New Product
router.post("/",(req,res)=> {
    const {Name,Marque,Categorie,Style,Price} = req.body
    let newProduct= new Product ({
        Name,
        Marque,
        Categorie,
        Style,
        Price,
    })
newProduct.save()
        .then(data => res.send(data))
        .catch(err => console.error(err.message))
})


//  Get Product By ID
router.get('/search/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.send(product))
        .catch(err => console.error(err.message))
})

 // Update Product
router.put('/:id', (req, res) => {
    let updatedProduct = req.body
    Product.findByIdAndUpdate(req.params.id, {$set: {...updatedProduct}})
        .then(() => Product.findById(req.params.id)
            .then(result => res.send(result))
            .catch(err => console.error(err.message))
            )
        .catch(err => console.error(err.message))
})
// Delete Product
router.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(() => Product.find()
            .then(products => res.send(products))
            .catch(err => console.error(err.message))
            )
        .catch(err => console.error(err.message))
})

module.exports = router