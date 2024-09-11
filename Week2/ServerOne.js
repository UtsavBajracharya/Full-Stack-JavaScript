// Application using Express Framework

const express = require("express"); // imports the Express module. we can use Express' methods to define routes and middleware with this
const app = express(); // to set up routes, handle HTTP requests, and configure middleware

app.get("/", (req, resp) => { // two arguments Represents the request object and response object
  resp.send("Welcome to Main Page!");
});

app.get("/sales", (req, resp) => { // route for the /sales URL
  resp.send("Welcome to Sales Department!");
});

app.get("/sales/:name", (req, res) => { // "/sales/:name" for dynamically handling a request based on a product name provided in the URL.
  res.send(`We ran out of ${req.params.name}`);
});

//The :name part is a route parameter, which means the server can capture whatever is placed in that part of the URL and use it.


app.listen(3000, "127.0.0.1");

// This tells the server to listen on port 3000 on the local machine with the IP address 127.0.0.1

