const express = require("express")
const ejs = require("ejs")
const cfg = require("./config.json")
const app = express()
app.set("view engine","ejs")

app.get("/", (req,res)=>{
    res.send(ejs.Template());
})

app.listen(cfg["port"], ()=>{
    console.log(`Frontend is running on port:${cfg["port"]}`);
})