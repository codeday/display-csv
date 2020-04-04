require('dotenv').config();
const nunjucks = require("nunjucks");
var path = require('path');
const app = require('express')();
const getCsv = require('./get-csv');
const config = require('./config');

// Template engine configuration. The path dir is pretty much the only thing that may change.
nunjucks.configure(path.join(__dirname, 'Templates'), {
  autoescape: true,
  express: app
})

// Primary (and only...) path
app.get('/', async (req, res) => {
  const csv = await getCsv(config.csvUrl);
  // Include variables used in template in the array here
  res.render('index.html', { csv: csv, config: config })
});

app.listen(config.port, () => {
  console.log(`🚀  To the moon! http://0.0.0.0:${config.port}`);
});
