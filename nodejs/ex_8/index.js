const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  response.end("Congrats you're using your first Node.js Web Server");
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log("Unable to start the server on port", err);
  }
  console.log(`This HTTP server is running on port ${port}`);
});