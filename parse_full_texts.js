const fs = require('fs');

const texts = fs.readFileSync('canva_texts.txt', 'utf8').split('\n');

console.log('=== CANVA PORTFOLIO TEXTS ===');
texts.forEach((t, i) => {
  if (t.trim().length > 2 && !t.includes('http') && !t.includes('AAAA')) {
    console.log(`${i}: ${t}`);
  }
});
