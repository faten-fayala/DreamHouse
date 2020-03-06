const mongoose=require("mongoose")

const ProductSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Marque:{
        type:String,
        required:true
    },
    Categorie:{
        type:String,
        required:true
    },
    Style:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    }
  
}

)
module.exports= mongoose.model("product",ProductSchema)