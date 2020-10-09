const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require('path');

//Data structures where the data will be saved
let dbData = fs.readFileSync(path.join(__dirname,"../db/db.json"), "utf8");
dbData = JSON.parse(dbData);

//Array of notes
let notes = dbData.notes;

//route to get the notes from the server
router.get("/notes",function(req,res){
    res.json(notesData)
})

//TODO:route to clear a note from the server
// router.get("/clear",function(req,res) {

// })

//route to add a note to the db
router.post("/notes",function(req,res) {
    notes.push(req.body)
    const newDbState = {
        notes:notesData
    }
    fs.writeFileSync(path.join(__dirname, "../db/db.json"),JSON.stringify(newDbState, null, 2));
})

module.exports = router;