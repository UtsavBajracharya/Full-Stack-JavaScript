const http = require("http");

const fs  = require('fs');

// const hostname = "127.0.0.1";

// const port = 3000;

const server = http.createServer((req, res) => {


  // res.end("<b>Hello world</b>");

  // In order to send an html file to client
  fs.readFile('index.html',(arr,data) => {
    req.setHeader('Content-type', 'text/html');// to set the file or identify file as a html file
    res.end(data);
  })


});


// In order ti send a HTML file
server.listen(3000, "127.0.0.1");
