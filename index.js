var express = require("express");
var app = express();

// serves static files in ./public/ directory
app.use(express.static('public'))

app.get('/', (req, res) => {
    //res.send("Hello, world!");
})

app.listen(8000, () => {
    console.log("Listening on port 8000...\n Press Ctrl-C to stop server\n");
});
