const express = require("express")
const port = 3003
const mongoose = require("mongoose")
const url = "mongodb://localhost/cast"
const myRoute = require('./router')


const app = express()

mongoose.connect(url).then(()=>{
    console.log(`You have successfuly connected to the port: ${port}`)
}).catch((error)=>{
    console.log(`Not connected to the port: ${port}`)
})

app.get('/', (req, res)=>{
    res.status(200).json({message: `i am running with the port ${port}`})
})


app.use(express.json())
app.use("/api", myRoute)


app.listen(port, ()=>{
    console.log(`Listening to port: ${port}`)
})