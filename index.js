const express = require('express');
const app = express();
const port = 3000;

const hbs = require('hbs');

app.use(express.static('public'));
// indicando el motor de plantilla y ubicacion.
app.set('views', './views');
app.set('view engine', 'hbs');
// Registrando la ubicacion de los partials.
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// Helper que me permite cambiar el partial segun lo que le envie
hbs.registerHelper('whichBody', function(vista) { return vista});

// Ahora las rutas renderizan el layout, y envia el valor vista para indicar cual es su contenido
app.get('/', (req, res) => {
    res.render('layout', {title: 'Usando hbs', vista: 'index'});
});
app.get('/generic', (req, res) => {
    res.render('layout', {title: 'Usando hbs', vista: 'generic'});
});
app.get('/elements', (req, res) => {
    res.render('layout', {title: 'Usando hbs', vista: 'elements'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});