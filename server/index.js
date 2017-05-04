const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 9000;

import instagram_route from "./routes/instagram";

// Enables cors for all response in the express api
app.use(cors());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Routes
app.use('/api/instagram', instagram_route);


/*
 // Always return the main index.html, so react-router render the route in the client
 app.get('*', (req, res) => {
 res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
 });
 */

app.get('/saludo', (req, res) => {
  res.send('Hola como estas');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
