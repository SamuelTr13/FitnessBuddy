const express = require('express');
const app = express();
const path = require('path');
const { checkServerIdentity } = require('tls');
const pageRouter = require('./routers/pages');
const Chest = require('../src/Pages/Chest');

const PORT = 3000;


//serve files in src for frontend
app.use('/', express.static(path.resolve(__dirname, '../src')))

// serve index.html on the route '/'
app.get('/', (req, res) => {
return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

app.use('/pages', pageRouter) 

app.use('*', (req, res) => {
    res.status(404).send('This is not the page you\'re looking for');
})

app.listen(PORT, console.log(`Listening on port ${PORT}`)); //listens on port 3000 -> http://localhost:3000/
