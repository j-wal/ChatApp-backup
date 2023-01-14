const path = require('path');
const express = require('express')

// Public Path zusammenbauen
// leitet die Anfrage an den Server auf Public-Ordner um -> index.html
const publicPath = path.join(__dirname, '/../public');
const port = process.env.Port || 3000; 

//
var app = express();
app.use(express.static(publicPath));

app.listen(port, () =>{
    console.log('Server is up at port ' + port);
})