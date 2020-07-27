require('dotenv').config();
const nunjucks = require("nunjucks");
var path = require('path');
const app = require('express')();
const getCsv = require('./get-csv');
const config = require('./config');
const viewFunctions = require('./view-functions');

// Template engine configuration. The path dir is pretty much the only thing that may change.
const env = nunjucks.configure(path.join(__dirname, 'templates'), {
  autoescape: true,
  express: app
});
viewFunctions(env);

// Primary (and only...) path
app.get('/', async (req, res) => {
  const csv = await getCsv(config.csvUrl);
  // Include variables used in template in the array here
  res.render('slideshow.html', { csv: csv, config: config })
});

app.listen(config.port, () => {
  console.log(`🚀  To the moon! http://0.0.0.0:${config.port}`);
});
