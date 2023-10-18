require("dotenv").config();
const express = require('express')
const app = express()

const print = require("./controller");

app.get('/', print);
app.get("/hello", (req, res) => {
    res.send("Hello from the /hello route!");
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT} or default port`)
})