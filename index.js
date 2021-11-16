// const fs = require('fs'); ///core module
// const cetakNama = require('./coba'); ///local modul
// const moment = require ('moment'); //third party modul / npm modul

// const cetakNama = require('./coba')
// const PI = require('./coba')

const coba = require('./coba')

console.log(coba.cetakNama('Fajri'), 
            coba.PI, 
            coba.mahasiswa.cetakMhs(), 
            new coba.Orang()
);