const path = require('path');
const express = require('express');

// path.join gives the correct path of public directory
const publicPath = path.join(__dirname,'../public');

const port = process.env.port || 3000;
var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})