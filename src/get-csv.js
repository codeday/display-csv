const { promisify } = require('util')
const csvParse = promisify(require('csv').parse);
const fetch = require('node-fetch');

module.exports = async (csvUrl) => {
  const csvFile = await (await fetch(csvUrl)).text();
  return await csvParse(csvFile, { columns: true });
}
