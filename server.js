const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
  fs.readFile('/Studio_Project_V1.gif', function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200, {
      'Content-Type': 'image/gif'
    });
    res.end(data);
  });
}

const server = http.createServer(requestListener);
server.listen(8080);
