const express = require('express');
const path = require('path')


const app = express();


//middelwares

app.use('./static', express.static(__dirname + './public'));

//rutas: get, post, put, delete
app.get('/', (req, res) => {
    res.send("Hola mundo")
})

app.listen(3001, () => console.log("Servidor escuchando en puerto 3001"));
