const mongoose=require("mongoose")

const ArchitecteSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Rating:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Adresse:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    }
    
}

)
module.exports= mongoose.model("architecte",ArchitecteSchema)