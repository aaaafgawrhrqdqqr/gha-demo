const http = require('node:http');
const { message } = require('./app');

const port = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<h1>${message()}</h1>`);
}).listen(port);