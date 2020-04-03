require('dotenv').config();
const app = require('express')();
const getCsv = require('./get-csv');
const render = require('./render');
const config = require('./config');

app.get('/', async (req, res) => {
  const csv = await getCsv(config.csvUrl);
  res.send(`
    <html>
    <head>
      <title>${config.title}</title>
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/pure-min.css" integrity="sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47" crossorigin="anonymous">
    </head>
    <body>
      <div style="max-width: 980px; margin: 0 auto;">
        <h1>${config.title}</h1>
        ${render(csv, config.titleColumn)}
      </div>
    </body>
    </html>
  `);
});

app.listen(config.port, () => {
  console.log(`🚀  To the moon! http://0.0.0.0:${config.port}`);
});
