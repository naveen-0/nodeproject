const express = require("express");
const path = require("path");
const hbs = require("hbs");
// const partials = require("partials");
const app = express();
const port = process.env.PORT || 3001;

// public static path
const publicPath = path.join(__dirname, "../public");
const temPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");
app.set("view engine", "hbs");
app.set("views", temPath);
hbs.registerPartials(partialsPath);
// app.use(express.static(publicPath));

// routing 
app.get("", (req, res)=> {
res.render("index");
});
// app.get("", (req, res)=> {
//     res.send("Welecome to Express Js");
// });
app.get("/about", (req, res)=> {
    res.render("about");
});
app.get("/weather", (req, res)=> {
    res.render("weather");
});
app.get("*", (req, res)=> {
    res.render("404");
});
app.listen(port, ()=>{
    console.log(`Listtening to ${port}`);
});