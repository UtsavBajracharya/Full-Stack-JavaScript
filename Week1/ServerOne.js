const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {

  // In order to send an html file to client
  fs.readFile("index.html", (arr, data) => {
    res.setHeader("Content-Type", "text/html"); // to set the file or identify file as a html file
    res.end(data);
  });
});

// In order to send a HTML file
server.listen(3000);
