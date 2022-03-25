var express = require("express");
var app = express();
var PORT = (process.env.PORT || 8000);

// serves static files in ./public/ directory and its subdirectories
app.use(express.static(__dirname + "/public"));

app.set('port', PORT);

app.get('/', (req, res) => {
    //res.send("Hello, world!");
})

app.listen(app.get('port'), () => {
    console.log("What's For Dinner is running and listening on port", 
        app.get('port'));
});
