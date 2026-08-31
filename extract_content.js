const fs = require('fs');
const https = require('https');
const path = require('path');

const bootstrapRaw = fs.readFileSync('canva_bootstrap.json', 'utf8');

// Find all text blocks in JSON
function findStrings(obj, results = []) {
  if (typeof obj === 'string') {
    if (obj.length > 2 && !obj.startsWith('http') && !obj.includes('{}') && !obj.includes('function')) {
      results.push(obj);
    }
  } else if (Array.isArray(obj)) {
    obj.forEach(item => findStrings(item, results));
  } else if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      findStrings(obj[key], results);
    }
  }
  return results;
}

try {
  const json = JSON.parse(bootstrapRaw);
  const strings = findStrings(json);
  console.log('--- ALL EXTRACTED STRINGS FROM CANVA ---');
  const uniqueStrings = Array.from(new Set(strings));
  uniqueStrings.forEach((s, idx) => {
    if (s.length > 3) {
      console.log(`[${idx}]`, s);
    }
  });

  fs.writeFileSync('canva_texts.txt', uniqueStrings.join('\n'));

} catch (e) {
  console.error('Parse error:', e);
}

// Media URLs analysis
const mediaUrls = JSON.parse(fs.readFileSync('media_urls.json', 'utf8'));
console.log('Total Media URLs:', mediaUrls.length);

// Filter high quality images
const highRes = mediaUrls.filter(u => u.includes('screen_2x') || u.includes('screen_3x') || u.includes('quality:92'));
console.log('High-res images:', highRes.length);
fs.writeFileSync('highres_images.json', JSON.stringify(highRes, null, 2));
