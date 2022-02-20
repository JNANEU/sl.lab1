const http = require('http');
const express = require("express");

const hostname = '127.0.0.1';
const port = 3000;

const app = express();
app.get("/", (request, response) => {

    // відправляємо відповідь
    response.send("<h2>Привет Express!</h2>");
});
app.listen(3000);

