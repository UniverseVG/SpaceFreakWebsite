const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const path = require('path');

// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))


// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

mongoose.connect("mongodb+srv://admin-user:admin-user@cluster0.zinrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

const noteSchema = {
    Name: String,
    Email: String,
    Topic: String,
    Content: String,
}

const Notes = mongoose.model("Notes", noteSchema);

app.get('/', (req, res) => {
    Notes.find({}, function(err, note) {
        res.render('index', {
            noteList: note
        })
    })

})

app.listen(5000, function() {
    console.log("Server is Running on 5000")
})