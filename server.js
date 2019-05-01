const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('examination.hbs', {
    pageTitle: 'Home Page',
  });
});

app.get('/academics', (req, res) => {
  res.render('academics.hbs', {
    pageTitle: 'Academics'
  });
});
app.get('/selfdetails', (req, res) => {
  res.render('selfdetails.hbs', {
    pageTitle: 'Selfdetails'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
