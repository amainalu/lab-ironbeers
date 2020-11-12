const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();
// const randomBeer = PunkAPI.getRandom();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

hbs.registerPartials(path.join(__dirname, 'views/partials'));

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  console.log('¨hallo');
  res.render('index');
});

app.get('/beer', (req, res) => {
  console.log('¨CHECK');
  punkAPI.getBeers().then(beers => {
    res.render('beer', { beers: beers });
  });
});

app.get('/random-beer', (req, res) => {
  const randomBeer = punkAPI.getRandom();
  randomBeer.then(blabla => {});
  punkAPI.getRandom().then(beer => {
    console.log(beer);
    res.render('random-beer', { beer });
  });
});

app.get('/players', (req, res) => {
  res.render;
});

app.listen(3001, () => console.log('🏃‍ on port 3000'));
