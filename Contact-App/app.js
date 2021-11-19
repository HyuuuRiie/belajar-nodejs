// const contacts = require('./contacts');
const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
  command : 'add',
  describe : 'Menambahkan Contact Baru',
  builder : {
    nama :{
      describe : 'Nama Lengkap',
      demandOption : true,
      type : 'string',
    },
    email :{
      describe : 'Email',
      demandOption : false,
      type : 'string',
    },
    nohp :{
      describe : 'Nomor Handphone',
      demandOption : true,
      type : 'string',
    },
  },
  handler(argv) {
    contacts.simpanContact(argv.nama, argv.email, argv.nohp);
  },
}); 

yargs.parse();

// const main = async () =>{
//   const nama = await contacts.tulisPertanyaan('Masukkan Nama :');
//   const nohp = await contacts.tulisPertanyaan('Masukkan No HP :');
//   const email = await contacts.tulisPertanyaan('Masukkan Email :');

//   contacts.simpanContact(nama, email, nohp);
// };
// main();

///mengambil argumen dari command line
// console.log(process.argv);