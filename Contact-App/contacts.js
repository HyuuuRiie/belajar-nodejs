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

const loadContact = () =>{
  const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
  const contacts = JSON.parse(fileBuffer);
  return contacts;
}

const simpanContact = (nama, email, nohp) => {
  const contact = {nama, email, nohp};
  // const fileBuffer = fs.readFileSync('data/contact.json', 'utf-8');
  // const contacts = JSON.parse(fileBuffer);
  const contacts = loadContact();

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

const listContact = () => { 
  const contacts = loadContact();
  console.log(chalk.greenBright.inverse.bold('TerimaKasih sudah mengisi data'));
  contacts.forEach((contact, i) =>{
    console.log(`${i + 1}. ${contact.nama} - ${contact.nohp}`);
  })
};

const detailContact = (nama) => {
  const contacts = loadContact();
  const contact =contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  if(!contact){
    console.log(chalk.red.bold('Nama TIdak Ditemukan'));
    return false;
  }
  console.log(chalk.cyan.bold(contact.nama));
  console.log(contact.nohp);

  if(contact.email){console.log(contact.email);}
};

const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContact = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );
  
  if(contacts.length === newContact.length){
    console.log(chalk.red.bold(`${nama} Tidak Ditemukan`));
    return false;
  }
  fs.writeFileSync('data/contact.json', JSON.stringify(newContact));

  console.log(chalk.green.inverse.bold(`${nama} Berhasil dihapus`));
};


module.exports = { simpanContact, listContact, detailContact, deleteContact };

