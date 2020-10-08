//================================================================
//Requirements
//================================================================
var express = require("Express");
var app = express();
var PORT = 3000;

//================================================================
//Data Handlers
//================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.send('Note taking API is working')
});

//================================================================
//Listeners
//================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})