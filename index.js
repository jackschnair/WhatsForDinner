var express = require("express");
var app = express();

// serves static files in ./public/ directory and its subdirectories
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    //res.send("Hello, world!");
})

app.listen(8000, () => {
    console.log("Listening on port 8000...\nPress Ctrl-C to stop server\n");
});
