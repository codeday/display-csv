module.exports.title = process.env.TITLE || '';
module.exports.csvUrl = process.env.CSV_URL;
module.exports.titleColumn = process.env.TITLE_COLUMN;
module.exports.port = process.env.PORT || 80;
// Used to define what fields to display.
module.exports.fields = process.env.FIELDS.split(',')
