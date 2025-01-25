const express = require('express');
const bodyParser = require('body-parser');

const site = express();
site.use(bodyParser.json())

site.get('/', (req, res) => {
    out.send('Welcome to NutriTrack!');
});

site.post('/gen-recipes',(req, res) => {
    const { groceries } = req.body;
    res.json({message: 'Received groceries: ${groceries}' });
});

site.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});