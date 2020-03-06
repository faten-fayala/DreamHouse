const mongoose =require('mongoose')
const DemandSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    piece:{
        type:String,
        required:true
    },
    styledemanded:{
        type:String,
        required:true
    },
    gamme:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    thespace:{
        type:String,
        required:true
    },
    actualpiece:{
        type:String,
        required:true
    },
    inspiration:{
        type:String,
        required:false
    },
    speceficdemand:{
        type:String,
        required:false
    }, 
    date:{
        type:Date,
        default: Date.now
    },
    confirmed:{
        type:Boolean,
        default: false
    },
    denied:{
        type:Boolean,
        default: false
    },
})

module.exports = mongoose.model('demand',DemandSchema)