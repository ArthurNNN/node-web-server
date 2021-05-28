const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/chocolate", function (req, res) {
    res.send("Mm chocolate :O");
});


app.get("/node", function (req, res) {
    res.send("Hi Node!");
});

app.get("/migracode", function (req, res) {
    res.send("Yo nunca me caigo, si me caigo me levanto");
});

app.listen(3000, () => console.log("Server is up and running"))