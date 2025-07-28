const fs = require('fs');
const path = require('path');

// Test image loading for heroes
const heroesDir = path.join(__dirname, 'public', 'heroes');
const heroIds = ['vildred', 'bellona', 'luna', 'ruele-of-light', 'fallen-cecilia', 'tamarinne', 'iseria'];

console.log('🔍 Testing hero images...\n');

// Check if heroes directory exists
if (!fs.existsSync(heroesDir)) {
  console.log('❌ Heroes directory not found:', heroesDir);
  process.exit(1);
}

// List all files in heroes directory
const files = fs.readdirSync(heroesDir);
console.log('📁 Files in heroes directory:');
files.forEach(file => {
  console.log(`  - ${file}`);
});

console.log('\n🎯 Testing specific hero IDs:');
heroIds.forEach(heroId => {
  const pngPath = path.join(heroesDir, `${heroId}.png`);
  const jpgPath = path.join(heroesDir, `${heroId}.jpg`);
  const webpPath = path.join(heroesDir, `${heroId}.webp`);
  
  console.log(`\n${heroId}:`);
  console.log(`  PNG: ${fs.existsSync(pngPath) ? '✅' : '❌'}`);
  console.log(`  JPG: ${fs.existsSync(jpgPath) ? '✅' : '❌'}`);
  console.log(`  WebP: ${fs.existsSync(webpPath) ? '✅' : '❌'}`);
});

console.log('\n📊 Summary:');
const pngFiles = files.filter(f => f.endsWith('.png'));
const jpgFiles = files.filter(f => f.endsWith('.jpg'));
const webpFiles = files.filter(f => f.endsWith('.webp'));

console.log(`  PNG files: ${pngFiles.length}`);
console.log(`  JPG files: ${jpgFiles.length}`);
console.log(`  WebP files: ${webpFiles.length}`);
console.log(`  Total files: ${files.length}`); 