const fs = require('fs');
const path = require('path');
const https = require('https');

console.log('🖼️  Downloading Hero Images');
console.log('============================\n');

const heroesDir = path.join(__dirname, 'public', 'heroes');

// Create heroes directory if it doesn't exist
if (!fs.existsSync(heroesDir)) {
  fs.mkdirSync(heroesDir, { recursive: true });
}

// Epic Seven hero images from reliable sources
const heroImages = [
  {
    id: 'vildred',
    name: 'Vildred',
    url: 'https://epic7x.com/wp-content/uploads/2019/05/vildred-120x120.png'
  },
  {
    id: 'bellona',
    name: 'Bellona', 
    url: 'https://epic7x.com/wp-content/uploads/2019/05/bellona-120x120.png'
  },
  {
    id: 'luna',
    name: 'Luna',
    url: 'https://epic7x.com/wp-content/uploads/2019/05/luna-120x120.png'
  },
  {
    id: 'ruele-of-light',
    name: 'Ruele of Light',
    url: 'https://epic7x.com/wp-content/uploads/2019/05/ruele-of-light-120x120.png'
  },
  {
    id: 'fallen-cecilia',
    name: 'Fallen Cecilia',
    url: 'https://epic7x.com/wp-content/uploads/2019/05/fallen-cecilia-120x120.png'
  },
  {
    id: 'tamarinne',
    name: 'Tamarinne',
    url: 'https://epic7x.com/wp-content/uploads/2019/05/tamarinne-120x120.png'
  },
  {
    id: 'iseria',
    name: 'Iseria',
    url: 'https://epic7x.com/wp-content/uploads/2019/05/iseria-120x120.png'
  }
];

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(heroesDir, filename);
    
    console.log(`📥 Downloading ${filename}...`);
    
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(filepath);
          console.log(`✅ ${filename} downloaded (${Math.round(stats.size/1024)}KB)`);
          resolve();
        });
      } else {
        console.log(`❌ Failed to download ${filename}: ${response.statusCode}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`❌ Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('🚀 Starting downloads...\n');
  
  for (const hero of heroImages) {
    try {
      await downloadImage(hero.url, `${hero.id}.png`);
    } catch (error) {
      console.log(`⚠️  Skipping ${hero.id}.png due to error`);
    }
  }
  
  console.log('\n📊 Download Summary:');
  const files = fs.readdirSync(heroesDir).filter(f => f.endsWith('.png'));
  console.log(`  Downloaded: ${files.length} images`);
  
  files.forEach(file => {
    const stats = fs.statSync(path.join(heroesDir, file));
    console.log(`  - ${file}: ${Math.round(stats.size/1024)}KB`);
  });
  
  console.log('\n🎉 Download complete!');
}

downloadAllImages().catch(console.error); 