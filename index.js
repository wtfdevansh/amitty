const express = require('express');
const bodyParser = require("body-parser");
const app = express();



app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/public/'))

app.get("/",function(req,res){
    // console.log(req);
    res.sendFile(__dirname + "/login.html");
})

app.post("/",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(username === "devansh7" && password === "8384devu"){
    res.sendFile(__dirname + "/result.html");
    }else{
        res.send("incorrect credentials!!")
    }
})

app.listen(process.env.PORT || 3000,function(){
    console.log("server is running on 3000");
})

