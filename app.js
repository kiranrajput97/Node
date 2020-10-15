const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');


app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', '/index.html'));
});

app.listen(3000, function () {
    console.log('listerning to port 3000');
});   