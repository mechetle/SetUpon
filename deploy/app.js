const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public/dist'))

app.get('/', function (req,res) {
    res.sendFile("index.html");
});

// Starting the node server ahahah
app.listen(3000, function () {
    console.log('App is now starting horray!')
})