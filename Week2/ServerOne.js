express = require('express');
app = express();

app.get("/", (req, resp) => {

    resp.sent("Welcome to Main Page!")

})

app.get("/sales", (req, resp) => {

    resp.sent("Welcome to Sales Department!")

})





//In order to send a HTML file.
Server.listen(3000,'127.0.0.1');