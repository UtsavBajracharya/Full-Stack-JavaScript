const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {

  fs.readFile("index.html", (err, data) => {
    if (err) {
      // File not found or error reading the file
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 404; // Set the HTTP status code to 404 for "Not Found"
      res.end(`
        <html>
          <head>
            <title>404 Not Found</title>
          </head>
          <body style="font-family: Arial, sans-serif;">
            <h1 style="color: red;">The page you requested is not available</h1>
          </body>
        </html>
      `);
    } else {
      // File found, send the HTML content
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  });
});

// In order to send a HTML file
server.listen(3000);
