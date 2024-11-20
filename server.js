const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const port = 3000;

const options = {
  key: fs.readFileSync('./certs/key.pem'),
  cert: fs.readFileSync('./certs/cert.pem')
};

app.get('/', (req, res) => {
  res.send('¡Hola desde mi dominio local https://u.top.ia!');
});

https.createServer(options, app).listen(port, () => {
  console.log(`Servidor escuchando en https://u.top.ia:${port}`);
});
