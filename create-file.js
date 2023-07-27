// create-file.js
const fs = require('fs');

// Créer le fichier "welcome.txt" contenant "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" created with content "Hello Node"');
});

// Lire et afficher les données de "hello.txt"
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
