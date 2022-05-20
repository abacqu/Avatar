const express = require('express');
const characters = require('./models/characters');

// this activates the express framework
const app = express();

// Express Web Server Port Variable
const port = 3000;



app.get("/", (req, res) => {
    res.send("Welcome to Avatar");
});

app.get("/earth", (req, res) => {
    res.render('index.ejs', { 'characters': characters});
});



app.get("/earth/:indexOfEarthArray", (req, res) => {
    // render is a special method that informs the template engine to render a template. we just provide the name as a string
    res.render('show.ejs', {
        //second param must be an object
        character: characters[req.params.indexOfEarthArray],
        //there will be a variable available inside the ejs file called character, its value is characters[req.params.indexOfEarthsArray]
    });
});

app.listen(port, () => {
    console.log("listening on port", port);
});