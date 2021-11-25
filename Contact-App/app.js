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
}).demandCommand(); 

//menampilkan daftar kontak
yargs.command({
  command : 'list',
  describe : 'Menampilkan daftar kontak',
  handler() {
    contacts.listContact(); 
  },
});
///menampilkan detail contact berdasar nama
yargs.command({
  command : 'detail',
  describe : 'Menampilkan detail kontak',
  builder : {
    nama :{
      describe : 'Nama Lengkap',
      demandOption : true,
      type : 'string',
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama); 
  },

});
///menghapus kontak berdasarkan nama
yargs.command({
  command : 'delete',
  describe : 'Menghapus detail kontak',
  builder : {
    nama :{
      describe : 'Nama Lengkap',
      demandOption : true,
      type : 'string',
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama); 
  },

});
yargs.parse();

