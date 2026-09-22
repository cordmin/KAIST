const https = require('https');

const query = 'AMOLED';
const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&format=json`;

https.get(url, {
  headers: {
    'User-Agent': 'KAIST-Educational-Display-Research/1.0 (https://kaist.ac.kr; contact@kaist.ac.kr) node-fetch/2.6'
  }
}, res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const json = JSON.parse(data);
    console.log(json.query.search.map(s => s.title));
  });
});
