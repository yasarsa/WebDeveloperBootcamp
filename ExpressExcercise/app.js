var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("HOME PAGE");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    var animalSound;
    if(animal === "pig"){
        animalSound = "Oink";
    }else if(animal === "cow"){
        animalSound = "Moo";
    }else if(animal === "dog"){
        animalSound = "Woof";
    }else{
        animalSound = "WTF";
    }
    res.send("The "+animal+" says "+animalSound);
});

app.get("/repeat/:word/:num", function(req,res){
    var num = Number(req.params.num);
    var word = req.params.word;
    var result = "";
    for(var i = 0; i<num; i++){
        result += word + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
    res.send("WRONG! -Trump");
});

app.listen(3000, function(){
    console.log("Server started!");
});