const express = require('express');

const path = require('path');

const fs = require('fs');

const app = express();

const port = 8080;

// Middleware to serve static files from the "public" directory
app.use(express.static('public'));

// Route to serve requested HTML files
app.get('/index.html', (req, res) => {
    const requestedFile = path.join(__dirname, 'public', req.params.filename);

    // Check if the file exists
    fs.access(requestedFile, fs.constants.F_OK, (arr) => {
        if (arr) {
            // File not found, send custom error message with red font
            res.status(404).send(`
                <html>
                    <head><title>404 Not Found</title></head>
                    <body style="font-family: Arial, sans-serif;">
                        <h1 style="color: red;">The page you requested is not available</h1>
                    </body>
                </html>
            `);
        } else {
            // File exists, send the file content
            res.sendFile(requestedFile);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});