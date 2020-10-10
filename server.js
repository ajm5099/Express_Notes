//================================================================
//Requirements
//================================================================
const express = require("Express");
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
let noteData = fs.readFileSync(path.join(__dirname,"db.json"),"utf8");
noteData = JSON.parse(noteData);
// console.log(noteData);

let noteId=0;


//================================================================
//Routes
//================================================================

// Create the get route that will return index.html file using GET*
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"index.html"))
});

// Create the get route for the notes.html file
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname,"notes.html"));
});

//Put the data on the page

app.get("/api/notes", function(req,res) {
    console.log("This is the note data variable: " + noteData);
    res.json(noteData.notes)
})



//TODO: POST: Create API route for api/notes that should recieve a new note to save on the request body, add it to db.json, and return the new note to the client
app.post("/api/notes",function(req,res){
    const newNoteObj= {
        title: "hello new note"
        text: "another new note"
        // title:req.body.noteTitle,
        // text: req.body.noteText,
        id: noteId+1
    }
    noteId++;
    fs.writeFileSync(path.join(__dirname,"/db.json"),JSON.stringify(newNoteObj,null,2));
    console.log(newNoteObj)
})

// Create the wildcard
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname,"index.html"));
});

//TODO: DELETE: api/notes/:id should recieve a query parameter with the note ID to be deleted. HINT: Read all notes from the file, remove the note with the correct ID, and then rewrite the db.json

//================================================================
//Listeners
//================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})