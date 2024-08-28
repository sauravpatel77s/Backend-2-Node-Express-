const express = require("express");
const app = express();



let  port = 8080; 

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`);
});

app.use((req, res) => {

    // receive a reuest 
    
    // console.log(req);
    console.log("request received");
    // res.send("this is a basic response");  iss response ke andar object bhi send kar sakte hai

    // res.send ({
    //     name:"apple",
    //     color:"red",
    // });

    // agar hum chaye tu hum  html format me bhi apna response send kar sakte hai.

    let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
    res.send(code);
});

