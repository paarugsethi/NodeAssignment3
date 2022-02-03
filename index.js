const express = require('express');
const app = express();
const port = 3000;
const Router = require('./api/users/users')

app.get("/", (req, res) => {
    res.send("Welcome to Homepage!");
})

app.use("/users" , Router)

app.listen(port, (req, res) => {
    console.log("Listening to 3000");
})