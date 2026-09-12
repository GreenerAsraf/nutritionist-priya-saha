import fs from 'fs';
import path from 'path';
import https from 'https';

const nutritionDir = path.resolve('public', 'nutrition');
if (!fs.existsSync(nutritionDir)) {
  fs.mkdirSync(nutritionDir, { recursive: true });
}

const images = [
  {
    name: 'fruits-berries.jpg',
    url: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'fruits-citrus.jpg',
    url: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'fruits-variety.jpg',
    url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'meal-salad-bowl.jpg',
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'meal-balanced-plate.jpg',
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'meal-healthy-dish.jpg',
    url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'advice-nutrition-plan.jpg',
    url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'advice-consultation.jpg',
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'advice-healthy-lifestyle.jpg',
    url: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1000&q=80'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const img of images) {
    const target = path.join(nutritionDir, img.name);
    console.log(`Downloading ${img.name}...`);
    try {
      await downloadFile(img.url, target);
      console.log(`Saved ${img.name}`);
    } catch (err) {
      console.error(`Error downloading ${img.name}:`, err.message);
    }
  }
  console.log('All downloads completed!');
}

run();
