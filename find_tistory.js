const fs = require('fs');
const content = fs.readFileSync('C:/Users/leekyungmin/.gemini/antigravity/brain/cf00a234-a78c-48d9-92fb-d2e1dedf938e/.system_generated/steps/552/content.md', 'utf8');
const match = content.match(/https?:\/\/[^\s"'<>]+/gi);
const cdn = match ? match.filter(u => u.includes('daumcdn.net') || u.includes('kakaocdn.net') || u.includes('tistory_admin') === false) : [];
console.log(Array.from(new Set(cdn)).filter(u => !u.includes('openGraph') && !u.includes('favicon') && !u.includes('script') && !u.includes('css')));
