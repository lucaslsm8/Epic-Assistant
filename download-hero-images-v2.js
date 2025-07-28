const fs = require('fs');
const path = require('path');
const https = require('https');

console.log('🖼️  Downloading Hero Images v2');
console.log('================================\n');

const heroesDir = path.join(__dirname, 'public', 'heroes');

// Create heroes directory if it doesn't exist
if (!fs.existsSync(heroesDir)) {
  fs.mkdirSync(heroesDir, { recursive: true });
}

// Epic Seven hero images from multiple sources
const heroImages = [
  {
    id: 'vildred',
    name: 'Vildred',
    urls: [
      'https://gamepress.gg/epic7skins/sites/default/files/styles/120x120/public/2019-05/vildred.png',
      'https://epic7db.com/images/heroes/vildred.png',
      'https://epic7.com/images/heroes/vildred.png'
    ]
  },
  {
    id: 'bellona',
    name: 'Bellona', 
    urls: [
      'https://gamepress.gg/epic7skins/sites/default/files/styles/120x120/public/2019-05/bellona.png',
      'https://epic7db.com/images/heroes/bellona.png',
      'https://epic7.com/images/heroes/bellona.png'
    ]
  },
  {
    id: 'luna',
    name: 'Luna',
    urls: [
      'https://gamepress.gg/epic7skins/sites/default/files/styles/120x120/public/2019-05/luna.png',
      'https://epic7db.com/images/heroes/luna.png',
      'https://epic7.com/images/heroes/luna.png'
    ]
  },
  {
    id: 'ruele-of-light',
    name: 'Ruele of Light',
    urls: [
      'https://gamepress.gg/epic7skins/sites/default/files/styles/120x120/public/2019-05/ruele-of-light.png',
      'https://epic7db.com/images/heroes/ruele-of-light.png',
      'https://epic7.com/images/heroes/ruele-of-light.png'
    ]
  },
  {
    id: 'fallen-cecilia',
    name: 'Fallen Cecilia',
    urls: [
      'https://gamepress.gg/epic7skins/sites/default/files/styles/120x120/public/2019-05/fallen-cecilia.png',
      'https://epic7db.com/images/heroes/fallen-cecilia.png',
      'https://epic7.com/images/heroes/fallen-cecilia.png'
    ]
  },
  {
    id: 'tamarinne',
    name: 'Tamarinne',
    urls: [
      'https://gamepress.gg/epic7skins/sites/default/files/styles/120x120/public/2019-05/tamarinne.png',
      'https://epic7db.com/images/heroes/tamarinne.png',
      'https://epic7.com/images/heroes/tamarinne.png'
    ]
  },
  {
    id: 'iseria',
    name: 'Iseria',
    urls: [
      'https://gamepress.gg/epic7skins/sites/default/files/styles/120x120/public/2019-05/iseria.png',
      'https://epic7db.com/images/heroes/iseria.png',
      'https://epic7.com/images/heroes/iseria.png'
    ]
  }
];

// Function to download image with multiple URL attempts
function downloadImage(hero) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(heroesDir, `${hero.id}.png`);
    
    console.log(`📥 Downloading ${hero.name}...`);
    
    let attemptIndex = 0;
    
    function tryDownload() {
      if (attemptIndex >= hero.urls.length) {
        console.log(`❌ All sources failed for ${hero.name}`);
        reject(new Error('All sources failed'));
        return;
      }
      
      const url = hero.urls[attemptIndex];
      console.log(`  Trying: ${url}`);
      
      const file = fs.createWriteStream(filepath);
      
      https.get(url, (response) => {
        if (response.statusCode === 200) {
          response.pipe(file);
          
          file.on('finish', () => {
            file.close();
            const stats = fs.statSync(filepath);
            console.log(`✅ ${hero.name} downloaded (${Math.round(stats.size/1024)}KB)`);
            resolve();
          });
        } else {
          console.log(`  ❌ Failed: ${response.statusCode}`);
          attemptIndex++;
          tryDownload();
        }
      }).on('error', (err) => {
        console.log(`  ❌ Error: ${err.message}`);
        attemptIndex++;
        tryDownload();
      });
    }
    
    tryDownload();
  });
}

// Download all images
async function downloadAllImages() {
  console.log('🚀 Starting downloads...\n');
  
  for (const hero of heroImages) {
    try {
      await downloadImage(hero);
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