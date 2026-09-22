const https = require('https');
const fs = require('fs');

const url = 'https://tistory1.daumcdn.net/tistory/4705478/attach/b79046d6077948128f950b6a521dc2fb';
const dest = 'image/tools/tistory_burnin.jpg';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, res => {
  console.log('Status:', res.statusCode);
  if (res.statusCode === 200) {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded size:', fs.statSync(dest).size);
    });
  }
});
