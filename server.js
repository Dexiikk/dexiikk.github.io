const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public')); // Servíruj statické soubory z adresáře 'public'

app.get('/messages', (req, res) => {
    fs.readFile(path.join(__dirname, 'messages.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Chyba při načítání zpráv.');
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});
