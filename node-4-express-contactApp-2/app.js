const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact, addContact, cekDuplikat } = require('./utils/contacts');
const { body, validationResult, check } = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = 3000;

//gunakan ejs
app.set('view engine', 'ejs');

//third party middleware
app.use(expressLayouts);

///built in middleware agar bisa mengakses file" statis
app.use(express.static('public'));

///built in middleware
app.use(express.urlencoded({ extended: true }));

////konfigurasi flash data
app.use(cookieParser('secret'));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

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
    msg: req.flash('msg'),
  });
});

///halaman form tambah data
app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    title: 'Form Tambah Data Contact',
    layout: 'layouts/main-layouts',
  });
});

///proses data contact
app.post(
  '/contact',
  [
    body('nama').custom((value) => {
      const duplikat = cekDuplikat(value);
      if (duplikat) {
        throw new Error('Nama kontak sudah ada!');
      }
      return true;
    }),
    check('email', 'Email tidak valid').isEmail(),
    check('nohp', 'No HP tidak valid').isMobilePhone(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render('add-contact', {
        title: 'Form Data Contact',
        layout: 'layouts/main-layouts',
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      ////kirim flash message dulu
      req.flash('msg', 'Data contact berhasil ditambahkan');
      res.redirect('/contact');
    }
  }
);

///halaman detail contact
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
