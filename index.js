//================================================================
//Requirements
//================================================================
let express = require("Express");
let app = express();
let PORT = 3000;
//This lets us call different pages
let path = require("path")

//================================================================
//Data Handlers
//================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//TODO: Delete this after initial structure is setup
app.get("/", function(req, res) {
    res.send('Note taking API is working')
});

//TODO: Create the get route that will return index.html file using GET*

//TODO: Create the get route for the notes.html file

//TODO: GET: Create the API route to GET /api/notes from the db.json file, and return saved notes as JSON

//TODO: POST: Create API route for api/notes that should recieve a new note to save on teh request body, add it to db.json, and return the new note to the client

//TODO: DELETE: api/notes/:id should recieve a query parameter with the note ID to be deleted. HINT: Read all notes from the file, remove the note with the correct ID, and then rewrite the db.json

//================================================================
//Listeners
//================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})