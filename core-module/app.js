//core module
//file system
const fs = require('fs'); 

//menuliskan string ke file(synchronus)
// try {
    
//     fs.writeFileSync('data/test.txt', 'Hello Synchronus');
// } catch (error) {
//     console.log(error);
// }

//menuliskan string ke file(synchronus)

// fs.writeFile('data/test.txt', 'Hello Asynchronus', (e) =>{
//     console.log(e);
// });

//membaca isi file synchronus
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

//membaca isi file asynchronus 
// fs.readFile('data/test.txt', 'utf-8', (err, data) =>{
// if (err) throw err;
//   console.log(data);
// });
    
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
      rl.question('Masukkan Nama :', (nama) =>{
        rl.question('Masukkan No Hp :', (nohp) =>{
            const contact = {nama, nohp};
            const file = fs.readFileSync('data/contacts.json', 'utf8');
            const contacts = JSON.parse(file);

            contacts.push(contact);

            fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

            console.log('Terimaskasih sudah mengisi data');

            rl.close();
        });
      });
