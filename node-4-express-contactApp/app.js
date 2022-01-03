const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');

const app = express();
const port = 3000;

//gunakan ejs
app.set('view engine', 'ejs');

//third party middleware
app.use(expressLayouts);

///built in middleware agar bisa mengakses file" statis
app.use(express.static('public'));

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
  const contacts = loadContact();
  res.render('contact', {
    layout: 'layouts/main-layouts',
    title: 'Halaman Contact',
    contacts,
  });
});

app.get('/contact/:nama', (req, res) => {
  // res.send('Halaman Contact')
  const contact = findContact(req.params.nama);
  res.render('detail', {
    layout: 'layouts/main-layouts',
    title: 'Halaman Detail Contact',
    contact,
  });
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
