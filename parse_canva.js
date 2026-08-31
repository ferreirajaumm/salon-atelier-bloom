const fs = require('fs');
const https = require('https');

const url = "https://www.canva.com/design/DAHBkyDy4Lc/zCZuw_791ElMpJwKIXoaEA/view?utm_content=DAHBkyDy4Lc&utm_campaign=designshare&utm_medium=link&utm_source=viewer";

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7',
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('canva_raw.html', data);
    console.log('Downloaded HTML size:', data.length);

    // Extract all strings from JSON blocks
    const matches = data.match(/window\['bootstrap'\]\s*=\s*JSON\.parse\('([^']+)'\)/);
    if (matches && matches[1]) {
      try {
        const decoded = matches[1].replace(/\\'/g, "'").replace(/\\\\/g, "\\");
        fs.writeFileSync('canva_bootstrap.json', decoded);
        console.log('Bootstrap JSON saved! Length:', decoded.length);
      } catch (e) {
        console.error('Error decoding json:', e);
      }
    }

    // Extract all URLs containing media or image-resize
    const mediaUrls = Array.from(new Set(data.match(/https:\/\/[^"'\s\\]+image-resize[^\s"'\\]+/g) || []));
    console.log('Found Canva Media URLs:', mediaUrls.length);
    fs.writeFileSync('media_urls.json', JSON.stringify(mediaUrls, null, 2));

    // Extract readable Portuguese strings
    const ptRegex = /[\u00C0-\u017F\w\s.,!?:;\-\(\)]{5,}/g;
    // Search within initial state script
    const scripts = data.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];
    console.log('Found scripts count:', scripts.length);
  });
}).on('error', err => {
  console.error('HTTPS fetch error:', err);
});
