const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Hello World!');
  // res.json({
  //   nama : 'Wahyu',
  //   email : 'wahyu@gmail.com',
  //   nohp : '08123456778',
  // })
  res.sendFile('./index.html', {root: __dirname}); //lokasi path file
})

app.get('/about', (req, res) => {
  // res.send('Halaman About')
  res.sendFile('./about.html', {root: __dirname}); //lokasi path file
})

app.get('/contact', (req, res) => {
  // res.send('Halaman Contact')
  res.sendFile('./contact.html', {root: __dirname}); //lokasi path file
})

app.get('/product/:id', (req, res) =>{
  res.send(`Product Id : ${req.params.id} <br> Category Id : ${req.query.category}`);
});

app.use('/', (req, res) =>{
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// const fs= require('fs');
// const http =  require('http');
// const port = 3000;
// const renderHTML = (path, res) =>{
//   fs.readFile(path, (er, data) =>{
//     if(er){
//       res.writeHead(404);
//       res.write('Error, File not found')
//     }else{
//       res.write(data);
//     }
//     res.end();
//   });
// };
// http
// .createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type' : 'text/html',
//   });

//   const url = req.url;

//   switch(url){
//     case '/about':
//     renderHTML('./about.html', res);
//     break;
//     case '/contact':
//     renderHTML('./contact.html', res);
//     break;
//     default:
//     renderHTML('./index.html', res);
//     break;
//   }
//   //   if(url === '/about) { 
//   //     renderHTML('./about.html', res);
//   //   } else if (url === '/contact') {
//   //     renderHTML('./contact.html', res);
//   //   }else{
//   //     // res.write('Hellow World');
//   //     renderHTML('./index.html', res);
//   //   }
//   // });
// })
// .listen(port, () => {
//   console.log(`Server is listening on port ${port}...`);
// });
