const express = require("express");
const app = express();



let  port = 8080; 

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res) => {
    res.send("you contacted root path");
})

app.get("/apple",(req,res) => {
    res.send("you contacted apple path");
})

app.get("/orange",(req,res) => {
    res.send("you contacted orange path");
})


app.get("*",(req,res) => {
    res.send("this path does not exist");
})

app.post("/",(req,res) => {
    res.send("you sent a post request");
})

