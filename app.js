

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");





const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


// app.get("/", function(req, res) {
//     console.log("It works");
//     res.render("index.html");
// });


app.listen(3000, function(req, res) {
    console.log("Server runs fine")
});
