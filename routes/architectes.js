const express=require("express")
const router=express.Router()
const Architecte = require("../models/Architecte")
router.get("/",(req,res)=> {
    res.send("hello")

 })
 // Create New Architecte
router.post("/",(req,res)=> {
    const {Name,Rating,Description,Adresse,Phone} = req.body
    let newArchitecte= new Architecte ({
        Name,
        Rating,
        Description,
        Adresse,
        Phone 
    })
newArchitecte.save()
        .then(data => res.send(data))
        .catch(err => console.error(err.message))
})

// Get all Architectes
router.get('/architectes', (req, res) => {
    Architecte.find()
        .then(architectes => res.send(architectes))
        .catch(err => console.error(err.message))
})

// Get Architecte By ID
router.get('/search/:id', (req, res) => {
    Architecte.findById(req.params.id)
        .then(architecte => res.send(architecte))
        .catch(err => console.error(err.message))
})

// Update Architecte
router.put('/:id', (req, res) => {
    let updatedArchitecte = req.body
    Architecte.findByIdAndUpdate(req.params.id, {$set: {...updatedArchitecte}})
        .then(() => Architecte.findById(req.params.id)
            .then(result => res.send(result))
            .catch(err => console.error(err.message))
            )
        .catch(err => console.error(err.message))
})
// Delete Architecte
router.delete('/:id', (req, res) => {
    Architecte.findByIdAndRemove(req.params.id)
        .then(() => Architecte.find()
            .then(architectes => res.send(architectes))
            .catch(err => console.error(err.message))
            )
        .catch(err => console.error(err.message))
})
module.exports = router