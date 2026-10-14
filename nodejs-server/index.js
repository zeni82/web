const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('<h1>Hello World</h1>');

  } else if (req.url === '/about' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('<h1>About page</h1>');

  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});