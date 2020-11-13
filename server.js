const express = require('express');
const app = express();
let randomColor = require('randomcolor');
const uuid = require('uuid');

//middlewares
app.use(express.static('client'));

//routes
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/client/index.html');
});

//Listen on port 5000
server = app.listen( process.env.PORT || 5000);