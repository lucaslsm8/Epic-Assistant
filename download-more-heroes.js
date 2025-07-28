const fs = require('fs');
const path = require('path');
const https = require('https');

console.log('🖼️  Downloading More Hero Images from CeciliaBot');
console.log('=================================================\n');

const heroesDir = path.join(__dirname, 'public', 'heroes');

// Create heroes directory if it doesn't exist
if (!fs.existsSync(heroesDir)) {
  fs.mkdirSync(heroesDir, { recursive: true });
}

// Epic Seven hero images from CeciliaBot - expanded list
const heroImages = [
  // Original heroes
  { id: 'vildred', name: 'Vildred', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2007_su.png' },
  { id: 'arbiter-vildred', name: 'Arbiter Vildred', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2007_su.png' },
  { id: 'bellona', name: 'Bellona', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1001_su.png' },
  { id: 'luna', name: 'Luna', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1002_su.png' },
  { id: 'ruele-of-light', name: 'Ruele of Light', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1003_su.png' },
  { id: 'fallen-cecilia', name: 'Fallen Cecilia', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1004_su.png' },
  { id: 'tamarinne', name: 'Tamarinne', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1005_su.png' },
  { id: 'iseria', name: 'Iseria', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1006_su.png' },
  
  // Additional popular heroes
  { id: 'kayron', name: 'Kayron', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1008_su.png' },
  { id: 'charles', name: 'Charles', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1009_su.png' },
  { id: 'ken', name: 'Ken', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1010_su.png' },
  { id: 'krau', name: 'Krau', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1011_su.png' },
  { id: 'sez', name: 'Sez', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1012_su.png' },
  { id: 'sigret', name: 'Sigret', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1013_su.png' },
  { id: 'tywin', name: 'Tywin', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1014_su.png' },
  { id: 'yufine', name: 'Yufine', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c1015_su.png' },
  
  // Moonlight heroes
  { id: 'specter-tenebria', name: 'Specter Tenebria', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2001_su.png' },
  { id: 'judge-kise', name: 'Judge Kise', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2002_su.png' },
  { id: 'dark-corvus', name: 'Dark Corvus', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2003_su.png' },
  { id: 'martial-artist-ken', name: 'Martial Artist Ken', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2004_su.png' },
  { id: 'assassin-coli', name: 'Assassin Coli', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2005_su.png' },
  { id: 'assassin-cidd', name: 'Assassin Cidd', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2006_su.png' },
  { id: 'shadow-rose', name: 'Shadow Rose', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2008_su.png' },
  { id: 'blood-blade-karin', name: 'Blood Blade Karin', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2009_su.png' },
  { id: 'challenger-dominiel', name: 'Challenger Dominiel', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2010_su.png' },
  { id: 'silver-blade-aramintha', name: 'Silver Blade Aramintha', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2011_su.png' },
  { id: 'auxiliary-lots', name: 'Auxiliary Lots', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2012_su.png' },
  { id: 'blaze-dingo', name: 'Blaze Dingo', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2013_su.png' },
  { id: 'guider-aither', name: 'Guider Aither', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2014_su.png' },
  { id: 'wanderer-silk', name: 'Wanderer Silk', url: 'https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/c2015_su.png' }
];

// Function to download image
function downloadImage(hero) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(heroesDir, `${hero.id}.png`);
    
    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`⏭️  Skipping ${hero.name} (already exists)`);
      resolve();
      return;
    }
    
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
  console.log(`  Total images: ${files.length}`);
  
  files.forEach(file => {
    const stats = fs.statSync(path.join(heroesDir, file));
    console.log(`  - ${file}: ${Math.round(stats.size/1024)}KB`);
  });
  
  console.log('\n🎉 Download complete!');
  console.log('Now you can test the images at: http://localhost:3000/image-test');
}

downloadAllImages().catch(console.error); 