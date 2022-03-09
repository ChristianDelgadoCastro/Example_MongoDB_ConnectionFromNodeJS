const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://Christian:1234@cluster0.emhjt.mongodb.net/notesDB", 
                                {useNewUrlParser: true}, {useUnifiedTopology: true} )

//Create a data schema
const noteSchema = {
    title: String,
    content: String
}

const Note = mongoose.model("Note", noteSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content
    })
    newNote.save();
    res.redirect('/');
})

app.listen(3000, function(){
    console.log("server is running on 3000");
})