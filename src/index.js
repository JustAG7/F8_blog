const path = require("path");
const express = require("express");
const morgan = require("morgan");   
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan("combined"));

//template engine
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'resources/views'));

//static file
app.get("/", (req,res) =>{
    res.render("table_courses");
})

//route
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})