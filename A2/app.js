const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));


app.use((req, res) => {
    res.status(404);
    res.send(`<h1 style="color: red;">The page you requested is not available</h1>`)
});


app.listen(8080, () => {
    console.log("App listening on port 8080");
});

