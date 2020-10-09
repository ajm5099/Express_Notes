//================================================================
//Requirements
//================================================================
const express = require("Express");
const app = express();
const PORT = process.env.PORT || 3000;
//This lets us call different pages
const path = require("path")

//================================================================
//Data Handlers and variables
//================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

let notesData = [
    {
        title:"important new note",
        text:"this is the body of the note we wish to take",
        id: 1
    }
];


//================================================================
//Get and Post activities
//================================================================

//TODO: Create the get route that will return index.html file using GET*
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"index.html"))
});

//TODO: Create the get route for the notes.html file
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname,"notes.html"));
});

//TODO: GET: Create the API route to GET /api/notes from the db.json file, and return saved notes as JSON

//TODO: POST: Create API route for api/notes that should recieve a new note to save on the request body, add it to db.json, and return the new note to the client

//TODO: DELETE: api/notes/:id should recieve a query parameter with the note ID to be deleted. HINT: Read all notes from the file, remove the note with the correct ID, and then rewrite the db.json

//================================================================
//Listeners
//================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})