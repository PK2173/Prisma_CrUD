const express = require("express")
const app = express()
require("dotenv").config()

app.use(express.json())

app.use("/",require("./router/router"))

app.listen(4040,()=>{
    console.log('conected server');
})