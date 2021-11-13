const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://admin-user:admin-user@cluster0.zinrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        UseUnifiedTopology: true
    })
    //Create a Schema
const noteSchema = {
    Name: String,
    Email: String,
    Topic: String,
    Content: String,

}

const Note = mongoose.model("Note", noteSchema);
app.use('/', express.static(path.join(__dirname, 'public')))
app.get("/", function(req, res) {
        res.sendFile(__dirname + "/index.html");
    })
    //app.post
app.post('/', function(req, res) {
    let newNote = new Note({
        Name: req.body.name,
        Email: req.body.email,
        Topic: req.body.topic,
        Content: req.body.content,


    });
    newNote.save();
    res.redirect('/');
})
app.listen(8000, function() {
    console.log("server is Running on 8000");
})