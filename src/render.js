const { escape } = require("entities");

const renderElem = (elem) => {
  if (elem.indexOf('http://') === 0 || elem.indexOf('https://') === 0)
    return `<a href="${elem.replace(/"/g, "%22")}" target="_blank">${escape(elem)}</a>`;
  else
    return '<p>' + escape(elem).replace(/\n/g, "<br />") + '</p>';
};

const renderRow = (row) => Object.keys(row)
    .map((k) => ({ k, v: row[k] }))
    .map((kv) => kv.v && `<h3>${kv.k}</h3>${renderElem(kv.v)}`)
    .join('');

module.exports = (kvs, titleColumn) => kvs
  .map((row) => {
    return `<h2>${row[titleColumn]}</h2>` + renderRow(row);
  })
  .join('<br /><br /><hr /><br /><br />');
