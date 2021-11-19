const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

//membuat folder data
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

///membuat file contact.json jika belum ada
const dataPath = './data/contact.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const simpanContact = (nama, email, nohp) => {
  const contact = {nama, email, nohp};
  const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(fileBuffer);

  ///cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if(duplikat){
    console.log(chalk.red.inverse.bold('Contact sudah terdaftar, ganti yang lain!'));
    return false;
  }

  ///cek email
  if(email){
    if(!validator.isEmail(email)){
    console.log(chalk.red.inverse.italic('Email Tidak Valid!'));
    return false;
    }
  }

  ///cek no hp
  if(!validator.isMobilePhone(nohp, 'id-ID')){
    console.log(chalk.red.inverse.italic('No HP Tidak Valid!'));
    return false;
    }

  contacts.push(contact);

  fs.writeFileSync('data/contact.json', JSON.stringify(contacts));

  console.log(chalk.green.inverse.bold('TerimaKasih sudah mengisi data'));

};
module.exports = { simpanContact };