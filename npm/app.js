///package validator = untuk memvalidasi string
///package chalk = untuk mewarnai / styling terminal
///package nodemon = untuk memonitor perubahan pada script
//jika menginstall nodemon secara lokal dijalankan melalui package.json

// const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('Yurie@gmail.com'));
// console.log(validator.isMobilePhone('082823423', 'id-ID'));
// console.log(validator.isNumeric('0aasad'));

// console.log(chalk.italic.bgBlue.black('Hello World'));
const nama = 'Yurie';
const pesan = chalk`lorem {bgRed.strikethrough.black askdlnas} ,{bgCyan.grey asfmn as,nd} asn af j. {green Nama Saya : ${nama}}`;
console.log(pesan);