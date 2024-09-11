express = require("express");
app = express();

app.get("/", (req, resp) => {
  resp.sent("Welcome to Main Page!");
});

app.get("/sales", (req, resp) => {
  resp.sent("Welcome to Sales Department!");
});

app.get("/sales/:name", (req, res) => {

  res.send(`We ran out of ${req.params.name}`);
});

app.listen(3000, '127.0.0.1');

//In order to send a HTML file.
// app.listen(3000, () => {
//   console.log("Server is listening on por 3000");
// });
