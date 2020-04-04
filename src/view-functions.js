const url = require('url');
const query = require('querystring');
const path = require('path');

module.exports = (env) => {
  env.addGlobal('is_youtube', (str) =>
    ['www.youtube.com', 'youtube.com', 'youtu.be'].indexOf(url.parse(str).hostname) >= 0
  );

  env.addGlobal('get_youtube_id', (str) => {
    const yt = url.parse(str);
    const q = query.parse(yt.query);
    if ('v' in q) return q.v;
    return yt.pathname.substr(1);
  });

  env.addGlobal('is_hls', (str) => {
    const urlPath = url.parse(str).pathname || '';
    const ext = path.extname(urlPath) || '';
    return ext === '.m3u8';
  });

  env.addGlobal('is_video', (str) => {
    const urlPath = url.parse(str).pathname || '';
    const ext = path.extname(urlPath) || '';
    return ['.mp4', '.mov'].indexOf(ext) >= 0;
  });
}
