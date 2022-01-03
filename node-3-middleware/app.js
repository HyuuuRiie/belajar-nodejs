const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const port = 3000;

//gunakan ejs
app.set('view engine', 'ejs');

//third party middleware
app.use(expressLayouts);
app.use(morgan('dev'));

///built in middleware agar bisa mengakses file" statis
app.use(express.static('public'));

////Application middleware
app.use((req, res, next) => {
  console.log('Time :', Date.now());
  next();
});

app.get('/', (req, res) => {
  // res.sendFile('./index.html', {root: __dirname}); //lokasi path file
  const mahasiswa = [
    {
      nama: 'Wahyu',
      email: 'wahyu@gmail.com',
    },
    {
      nama: 'Septiadi',
      email: 'Septiadi@gmail.com',
    },
    {
      nama: 'Fajri',
      email: 'wahyu@gmail.com',
    },
  ];
  res.render('index', {
    nama: 'Yurie',
    title: 'Halaman Home',
    mahasiswa,
    layout: 'layouts/main-layouts',
  });
});

app.get('/about', (req, res) => {
  // res.send('Halaman About')
  res.render('about', {
    layout: 'layouts/main-layouts',
    title: 'Halaman About',
  });
});

app.get('/contact', (req, res) => {
  // res.send('Halaman Contact')
  res.render('contact', {
    layout: 'layouts/main-layouts',
    title: 'Halaman Contact',
  });
});

app.get('/product/:id', (req, res) => {
  res.send(`Product Id : ${req.params.id} <br> Category Id : ${req.query.category}`);
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
