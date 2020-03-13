const express= require('express')
const mongoose=require("mongoose")
const app= express()

// Init middleware (bodyparser)

app.use(express.json())
// database URI
const db="mongodb+srv://faten:faten123456@architecte-wc6kh.mongodb.net/test?retryWrites=true&w=majority"
// Connect Database
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=> {
    if (err) console.log('database is not connected')
    else console.log('database connected')
})

// Define Routes
app.use('/architecte',require("./routes/architectes"))
app.use('/product',require("./routes/products"))
app.use('/api/user',require('./routes/users'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/cart',require('./routes/cart'))
app.use('/api/demand',require('./routes/demand'))


// Server Listening
app.listen(5000,(err) => {
    if (err) console.log('server is not running')
    else console.log('server is running on port 5000')
})
