const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.get("/", function(req,res){

let today = new Date();
let currentDay = today.getDay();
let day = "";

if (currentDay===0){
    day = "Sunday";
}
else if (currentDay===1){
    day= "Monday"
}
else if (currentDay===2){
    day= "Tuesday"
}
else if (currentDay===3){
    day= "Wednesday"
}
else if (currentDay===4){
    day= "Thursday"
}
else if (currentDay===5){
    day= "Friday"
}
else {
    day= "Saturday"
}

res.render("list", {kindOfDay: day});
});

app.listen(3000, function(){
    console.log("Server started on port 3000.")
});