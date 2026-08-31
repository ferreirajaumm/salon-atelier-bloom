const fs = require('fs');
const https = require('https');
const path = require('path');

const highres = JSON.parse(fs.readFileSync('highres_images.json', 'utf8'));

console.log('Downloading', highres.length, 'images from Canva...');

const outputDir = path.join(process.cwd(), 'public/images');
fs.mkdirSync(outputDir, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function downloadAll() {
  let count = 0;
  for (let i = 0; i < Math.min(highres.length, 12); i++) {
    const url = highres[i];
    const fileName = `canva-img-${i + 1}.jpg`;
    const dest = path.join(outputDir, fileName);
    try {
      await downloadFile(url, dest);
      console.log(`[${i + 1}/${Math.min(highres.length, 12)}] Downloaded: ${fileName}`);
      count++;
    } catch (e) {
      console.error(`Error downloading ${url}:`, e.message);
    }
  }
  console.log(`Finished downloading ${count} original images from Canva!`);
}

downloadAll();
