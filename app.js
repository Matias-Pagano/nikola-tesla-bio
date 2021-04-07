const express = require('express');

const app = express();

const path = require('path');

const port = process.env.PORT;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.listen((process.env.PORT || 3000), () => {
    console.log('servidor corriendo en el puerto ' + port)
});