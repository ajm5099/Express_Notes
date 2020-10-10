//================================================================
//Requirements
//================================================================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require("fs");
//This lets us call different pages
const path = require("path");

//================================================================
//Data Handlers and variables
//================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// GET: Create the API route to GET /api/notes from the db.json file, and return saved notes as JSON
let noteData = fs.readFileSync(path.join(__dirname, "db.json"), "utf8");
noteData = JSON.parse(noteData);

//================================================================
//Routes
//================================================================

// Create the get route that will return index.html file using GET
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

// Create the get route for the notes.html file
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//Put the data on the page
app.get("/api/notes", function (req, res) {
    console.log("This is the note data variable: " + noteData);
    res.json(noteData.notes)
});

//POST: Create API route for api/notes that should recieve a new note to save on the request body, add it to db.json, and return the new note to the client

app.post("/api/notes", function (req, res) {
    let id = Date.now()
    const newNoteObj = {
        title: req.body.title,
        text: req.body.text,
        id: id
    }
    noteData.notes.push(newNoteObj);
    fs.writeFileSync(path.join(__dirname, "/db.json"), JSON.stringify(noteData, null, 2));
    console.log(newNoteObj)
    res.json(newNoteObj);
})

// Create the wildcard
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

//DELETE: api/notes/:id should recieve a query parameter with the note ID to be deleted. HINT: Read all notes from the file, remove the note with the correct ID, and then rewrite the db.json

app.delete("/api/notes/:id", function (req, res) {
    //setting the note ID to a const
    const id = req.params.id
    //pulling in notes and filtering the correct ID
    const newNote = noteData.notes.filter(note => {
        return note.id != id
    })
    //setting the data to the new data with the deleted note removed
    noteData.notes = newNote;
    fs.writeFileSync(path.join(__dirname, "/db.json"), JSON.stringify(noteData, null, 2));
res.json(id)
});

//================================================================
//Listeners
//================================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})