const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

//middleware


// endpoints
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public"))
})

app.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

app.get("/styles", function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.css"))
})
const port = process.env.PORT || 4200

app.listen(port, () => {
    console.log(`Port ${port} locked and loaded.`)
})