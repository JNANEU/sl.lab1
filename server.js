const express = require('express');
const app = express();
require('dotenv').config();

app.use("/", (req, res) => {
    res.send(process.env.HELLO);
    res.end();
});

module.exports = app;
