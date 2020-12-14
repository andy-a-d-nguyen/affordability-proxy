const createCompress = require('compress-brotli');
const v8 = require('v8');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const { compress, decompress } = createCompress({
  serialize: v8.serialize,
  deserialize: v8.deserialize,
});

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use('/listings/:id', express.static(PUBLIC_DIR));


// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/listings/:id/bundles', router.bundles);

// Handling AJAX requests to the API by passing off requests to the api router
app.use('/', router.api);

module.exports = app;
