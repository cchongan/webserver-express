const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');


app.set('view engine', 'hbs');




app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'carlos chong'
    });


});

app.get('/about', (req, res) => {


    res.render('about', {
        nombre: 'Carlos'
    });


});

// app.get('/data', (req, res) => {
//     res.send('Hola Data');

// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port} `);
});