const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routers/api');

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve files in src for frontend
app.use('/', express.static(path.resolve(__dirname, '../src')))

// serve index.html on the route '/'
app.get('/', (req, res) => {
return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

app.use('/api', apiRouter) 

app.use('*', (req, res) => {
    res.status(404).send('This is not the page you\'re looking for');
})

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error!',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// if (Node.ENV !== 'test') {
  // app.listen(PORT, console.log(`Listening on port ${PORT}`)); //listens on port 3000 -> http://localhost:3000/
// }

module.exports = app;

