const express = require("express");
const app = express();



let  port = 8080; 

app.listen(port, ()=> {
    console.log(`app is listening  port ${port}`);
});
pp.get("/",(req,res) => {
    res.send("you contacted root path");
})

app.get("/apple",(req,res) => {
    res.send("you contacted apple path");
})

app.get("/orange",(req,res) => {
    res.send("you contacted orange path");
})

