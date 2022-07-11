var express = require("express");
var app = express();
var fs = require("fs");
var port = 8080;

app.use(express.static("."))

app.get("/", function(req, res) {
    html = fs.readFileSync("home.html");
    res.writeHead(200);
    res.write(html);
    res.end();
});

app.get("/chess", function(req, res) {
    html = fs.readFileSync("chess.html");
    res.writeHead(200);
    res.write(html);
    res.end();
});

app.listen(port, function() {
    console.log("Server running ", port);
});