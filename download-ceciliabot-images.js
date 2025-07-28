const fs = require('fs');
const path = require('path');
const https = require('https');

console.log('🖼️  Downloading Hero Images from CeciliaBot');
console.log('=============================================\n');

const heroesDir = path.join(__dirname, 'public', 'heroes');

// Create heroes directory if it doesn't exist
if (!fs.existsSync(heroesDir)) {
  fs.mkdirSync(heroesDir, { recursive: true });
}

// Epic Seven hero images from CeciliaBot
const heroImages = [
  {
    id: 'vildred',
    name: 'Vildred',
    url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2007_su.png'
  },
  {
    id: 'arbiter-vildred',
    name: 'Arbiter Vildred',
    url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2007_su.png'
  },
  {
    id: 'bellona',
    name: 'Bellona',
    url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1001_su.png'
  },
  {
    id: 'luna',
    name: 'Luna',
    url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1002_su.png'
  },
  {
    id: 'ruele-of-light',
    name: 'Ruele of Light',
    url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1003_su.png'
  },
  {
    id: 'fallen-cecilia',
    name: 'Fallen Cecilia',
    url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1004_su.png'
  },
  {
    id: 'tamarinne',
    name: 'Tamarinne',
    url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1005_su.png'
  },
  {
    id: 'iseria',
    name: 'Iseria',
    url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1006_su.png'
  }
];

// Function to download image
function downloadImage(hero) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(heroesDir, `${hero.id}.png`);
    
    console.log(`📥 Downloading ${hero.name}...`);
    console.log(`  URL: ${hero.url}`);
    
    const file = fs.createWriteStream(filepath);
    
    https.get(hero.url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(filepath);
          console.log(`✅ ${hero.name} downloaded (${Math.round(stats.size/1024)}KB)`);
          resolve();
        });
      } else {
        console.log(`❌ Failed to download ${hero.name}: ${response.statusCode}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`❌ Error downloading ${hero.name}: ${err.message}`);
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('🚀 Starting downloads from CeciliaBot...\n');
  
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
  console.log('Now you can test the images at: http://localhost:3000/image-test');
}

downloadAllImages().catch(console.error); 