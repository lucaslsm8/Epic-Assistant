const fs = require('fs');
const path = require('path');
const https = require('https');

// Lista de heróis populares do Epic7DB para adicionar
const additionalHeroes = [
  // RGB 4★ populares
  { id: 'angelica', name: 'Angelica', element: 'ICE', role: 'SOUL_WEAVER', isML: false, rarity: 4 },
  { id: 'achates', name: 'Achates', element: 'FIRE', role: 'SOUL_WEAVER', isML: false, rarity: 4 },
  { id: 'cidd', name: 'Cidd', element: 'EARTH', role: 'THIEF', isML: false, rarity: 4 },
  { id: 'dominic', name: 'Dominic', element: 'FIRE', role: 'WARRIOR', isML: false, rarity: 4 },
  { id: 'furious', name: 'Furious', element: 'ICE', role: 'RANGER', isML: false, rarity: 4 },
  { id: 'general-purrgis', name: 'General Purrgis', element: 'EARTH', role: 'KNIGHT', isML: false, rarity: 4 },
  { id: 'karin', name: 'Karin', element: 'ICE', role: 'THIEF', isML: false, rarity: 4 },
  { id: 'kluri', name: 'Kluri', element: 'EARTH', role: 'KNIGHT', isML: false, rarity: 4 },
  { id: 'lorina', name: 'Lorina', element: 'DARK', role: 'WARRIOR', isML: false, rarity: 4 },
  { id: 'montmorancy', name: 'Montmorancy', element: 'ICE', role: 'SOUL_WEAVER', isML: false, rarity: 4 },
  { id: 'rose', name: 'Rose', element: 'FIRE', role: 'KNIGHT', isML: false, rarity: 4 },
  { id: 'schuri', name: 'Schuri', element: 'FIRE', role: 'RANGER', isML: false, rarity: 4 },
  { id: 'serila', name: 'Serila', element: 'FIRE', role: 'MAGE', isML: false, rarity: 4 },
  { id: 'silk', name: 'Silk', element: 'EARTH', role: 'RANGER', isML: false, rarity: 4 },
  { id: 'surin', name: 'Surin', element: 'FIRE', role: 'THIEF', isML: false, rarity: 4 },
  
  // RGB 3★ populares
  { id: 'alexa', name: 'Alexa', element: 'ICE', role: 'THIEF', isML: false, rarity: 3 },
  { id: 'aither', name: 'Aither', element: 'ICE', role: 'SOUL_WEAVER', isML: false, rarity: 3 },
  { id: 'bask', name: 'Bask', element: 'FIRE', role: 'KNIGHT', isML: false, rarity: 3 },
  { id: 'carmainerose', name: 'Carmainerose', element: 'FIRE', role: 'MAGE', isML: false, rarity: 3 },
  { id: 'carrot', name: 'Carrot', element: 'FIRE', role: 'MAGE', isML: false, rarity: 3 },
  { id: 'cartuja', name: 'Cartuja', element: 'EARTH', role: 'WARRIOR', isML: false, rarity: 3 },
  { id: 'celeste', name: 'Celeste', element: 'DARK', role: 'THIEF', isML: false, rarity: 3 },
  { id: 'cermia', name: 'Cermia', element: 'FIRE', role: 'WARRIOR', isML: false, rarity: 3 },
  { id: 'clarissa', name: 'Clarissa', element: 'EARTH', role: 'WARRIOR', isML: false, rarity: 3 },
  { id: 'coli', name: 'Coli', element: 'ICE', role: 'THIEF', isML: false, rarity: 3 },
  { id: 'corvus', name: 'Corvus', element: 'DARK', role: 'WARRIOR', isML: false, rarity: 3 },
  { id: 'crozet', name: 'Crozet', element: 'ICE', role: 'KNIGHT', isML: false, rarity: 3 },
  { id: 'doris', name: 'Doris', element: 'EARTH', role: 'SOUL_WEAVER', isML: false, rarity: 3 },
  { id: 'elena', name: 'Elena', element: 'LIGHT', role: 'SOUL_WEAVER', isML: false, rarity: 3 },
  { id: 'gunther', name: 'Gunther', element: 'DARK', role: 'WARRIOR', isML: false, rarity: 3 },
  { id: 'haste', name: 'Haste', element: 'DARK', role: 'THIEF', isML: false, rarity: 3 },
  { id: 'hazel', name: 'Hazel', element: 'FIRE', role: 'SOUL_WEAVER', isML: false, rarity: 3 },
  { id: 'hurado', name: 'Hurado', element: 'DARK', role: 'MAGE', isML: false, rarity: 3 },
  { id: 'jecht', name: 'Jecht', element: 'FIRE', role: 'WARRIOR', isML: false, rarity: 3 },
  { id: 'judith', name: 'Judith', element: 'EARTH', role: 'THIEF', isML: false, rarity: 3 },
  { id: 'kiris', name: 'Kiris', element: 'EARTH', role: 'RANGER', isML: false, rarity: 3 },
  { id: 'lena', name: 'Lena', element: 'EARTH', role: 'WARRIOR', isML: false, rarity: 3 },
  { id: 'lots', name: 'Lots', element: 'LIGHT', role: 'MAGE', isML: false, rarity: 3 },
  { id: 'mercedes', name: 'Mercedes', element: 'FIRE', role: 'MAGE', isML: false, rarity: 3 },
  { id: 'mirsa', name: 'Mirsa', element: 'LIGHT', role: 'THIEF', isML: false, rarity: 3 },
  { id: 'mucacha', name: 'Mucacha', element: 'EARTH', role: 'WARRIOR', isML: false, rarity: 3 },
  { id: 'nemunas', name: 'Nemunas', element: 'EARTH', role: 'RANGER', isML: false, rarity: 3 },
  { id: 'pavel', name: 'Pavel', element: 'ICE', role: 'THIEF', isML: false, rarity: 3 },
  { id: 'pearlhorizon', name: 'Pearlhorizon', element: 'ICE', role: 'MAGE', isML: false, rarity: 3 },
  { id: 'purrgis', name: 'Purrgis', element: 'EARTH', role: 'KNIGHT', isML: false, rarity: 3 },
  { id: 'ras', name: 'Ras', element: 'LIGHT', role: 'WARRIOR', isML: false, rarity: 3 },
  { id: 'roozid', name: 'Roozid', element: 'EARTH', role: 'RANGER', isML: false, rarity: 3 },
  { id: 'taranor-guard', name: 'Taranor Guard', element: 'ICE', role: 'KNIGHT', isML: false, rarity: 3 },
  { id: 'taranor-royal-guard', name: 'Taranor Royal Guard', element: 'ICE', role: 'KNIGHT', isML: false, rarity: 3 },
  { id: 'tieria', name: 'Tieria', element: 'EARTH', role: 'RANGER', isML: false, rarity: 3 },
  { id: 'wanda', name: 'Wanda', element: 'DARK', role: 'RANGER', isML: false, rarity: 3 }
];

// Função para baixar imagem
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {}); // Delete the file async
      reject(err);
    });
  });
};

// Função para gerar dados do herói
const generateHeroData = (hero) => {
  const descriptions = {
    'angelica': 'A gentle healer with powerful recovery abilities.',
    'achates': 'A mysterious healer with dark powers.',
    'cidd': 'A swift assassin with lightning speed.',
    'dominic': 'A powerful warrior with fire magic.',
    'furious': 'A skilled ranger with ice arrows.',
    'general-purrgis': 'A commanding knight with tactical brilliance.',
    'karin': 'A deadly assassin with ice magic.',
    'kluri': 'A noble knight with earth powers.',
    'lorina': 'A dark warrior with immense strength.',
    'montmorancy': 'A cheerful healer with ice magic.',
    'rose': 'A fiery knight with burning passion.',
    'schuri': 'A skilled ranger with fire arrows.',
    'serila': 'A powerful mage with fire magic.',
    'silk': 'A swift ranger with earth arrows.',
    'surin': 'A deadly assassin with fire magic.',
    'alexa': 'A swift thief with ice magic.',
    'aither': 'A gentle healer with ice magic.',
    'bask': 'A fiery knight with burning passion.',
    'carmainerose': 'A powerful mage with fire magic.',
    'carrot': 'A cheerful mage with fire magic.',
    'cartuja': 'A powerful warrior with earth strength.',
    'celeste': 'A dark thief with shadow powers.',
    'cermia': 'A fiery warrior with burning strength.',
    'clarissa': 'A powerful warrior with earth strength.',
    'coli': 'A swift thief with ice magic.',
    'corvus': 'A dark warrior with immense power.',
    'crozet': 'A noble knight with ice powers.',
    'doris': 'A gentle healer with earth magic.',
    'elena': 'A light healer with holy powers.',
    'gunther': 'A dark warrior with immense strength.',
    'haste': 'A dark thief with shadow powers.',
    'hazel': 'A fiery healer with burning passion.',
    'hurado': 'A dark mage with shadow magic.',
    'jecht': 'A fiery warrior with burning strength.',
    'judith': 'A swift thief with earth magic.',
    'kiris': 'A skilled ranger with earth arrows.',
    'lena': 'A powerful warrior with earth strength.',
    'lots': 'A light mage with holy magic.',
    'mercedes': 'A fiery mage with burning magic.',
    'mirsa': 'A light thief with holy powers.',
    'mucacha': 'A powerful warrior with earth strength.',
    'nemunas': 'A skilled ranger with earth arrows.',
    'pavel': 'A swift thief with ice magic.',
    'pearlhorizon': 'A powerful mage with ice magic.',
    'purrgis': 'A noble knight with earth powers.',
    'ras': 'A light warrior with holy powers.',
    'roozid': 'A swift ranger with earth arrows.',
    'taranor-guard': 'A noble knight with ice powers.',
    'taranor-royal-guard': 'A noble knight with ice powers.',
    'tieria': 'A skilled ranger with earth arrows.',
    'wanda': 'A dark ranger with shadow arrows.'
  };

  const specialties = {
    'angelica': 'Healing and team support',
    'achates': 'Healing and debuff removal',
    'cidd': 'Speed and single target damage',
    'dominic': 'Single target damage and burns',
    'furious': 'Defense break and team support',
    'general-purrgis': 'Tank and team support',
    'karin': 'Speed and single target damage',
    'kluri': 'Tank and team support',
    'lorina': 'Single target damage',
    'montmorancy': 'Healing and debuff removal',
    'rose': 'Tank and team support',
    'schuri': 'CR manipulation and team support',
    'serila': 'AoE damage and burns',
    'silk': 'Speed and CR manipulation',
    'surin': 'Speed and single target damage',
    'alexa': 'Single target damage and defense break',
    'aither': 'Healing and team support',
    'bask': 'Tank and team support',
    'carmainerose': 'AoE damage and burns',
    'carrot': 'Single target damage and burns',
    'cartuja': 'Counter attacks and defense',
    'celeste': 'Speed and single target damage',
    'cermia': 'Single target damage and burns',
    'clarissa': 'AoE damage and defense break',
    'coli': 'Stealth and assassination',
    'corvus': 'Tank and sustain',
    'crozet': 'Tank and team support',
    'doris': 'Healing and team support',
    'elena': 'Healing and team protection',
    'gunther': 'Single target damage',
    'haste': 'Speed and single target damage',
    'hazel': 'Healing and team support',
    'hurado': 'CR manipulation and debuffs',
    'jecht': 'Single target damage',
    'judith': 'Speed and CR manipulation',
    'kiris': 'Poison and debuffs',
    'lena': 'Single target damage',
    'lots': 'CR manipulation and support',
    'mercedes': 'AoE damage and burns',
    'mirsa': 'Speed and evasion',
    'mucacha': 'Single target damage',
    'nemunas': 'Single target damage',
    'pavel': 'Speed and single target damage',
    'pearlhorizon': 'AoE damage and control',
    'purrgis': 'Tank and team support',
    'ras': 'Single target damage',
    'roozid': 'Speed and CR manipulation',
    'taranor-guard': 'Tank and team support',
    'taranor-royal-guard': 'Tank and team support',
    'tieria': 'Single target damage',
    'wanda': 'Speed and single target damage'
  };

  return {
    id: hero.id,
    name: hero.name,
    rarity: hero.rarity,
    element: `Element.${hero.element}`,
    role: `Role.${hero.role}`,
    zodiac: 'Zodiac.ARIES',
    image: `/heroes/${hero.id}.png`,
    description: descriptions[hero.id] || 'A powerful hero with unique abilities.',
    story: descriptions[hero.id] || 'A powerful hero with unique abilities.',
    isML: hero.isML,
    releaseDate: '2018-08-30',
    specialty: specialties[hero.id] || 'Combat and strategy',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: Math.floor(Math.random() * 4) + 6,
      pvp: Math.floor(Math.random() * 4) + 5,
      rta: Math.floor(Math.random() * 4) + 4,
      guildWar: Math.floor(Math.random() * 4) + 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: Math.floor(Math.random() * 500) + 1000,
        health: Math.floor(Math.random() * 2000) + 4000,
        defense: Math.floor(Math.random() * 200) + 400,
        speed: Math.floor(Math.random() * 30) + 100
      },
      maxStats: {
        attack: Math.floor(Math.random() * 800) + 1500,
        health: Math.floor(Math.random() * 3000) + 6000,
        defense: Math.floor(Math.random() * 300) + 600,
        speed: Math.floor(Math.random() * 30) + 100
      },
      awakening: {
        attack: Math.floor(Math.random() * 300) + 500,
        health: Math.floor(Math.random() * 1500) + 2000,
        defense: Math.floor(Math.random() * 150) + 200
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: 'TierRank.C',
        guildWar: 'TierRank.C',
        rta: 'TierRank.D'
      },
      pve: {
        wyvern: 'TierRank.B',
        golem: 'TierRank.A',
        banshee: 'TierRank.B',
        azimanak: 'TierRank.A',
        caides: 'TierRank.A',
        labyrinth: 'TierRank.A',
        abyss: 'TierRank.A'
      },
      lastUpdated: '2024-01-15'
    }
  };
};

console.log('📥 Baixando imagens de heróis adicionais...');
console.log(`- ${additionalHeroes.length} heróis para adicionar`);
console.log('- Criando placeholders para imagens');

// Criar placeholders para as imagens
additionalHeroes.forEach(hero => {
  const placeholderPath = path.join(__dirname, 'public/heroes', `${hero.id}.png`);
  if (!fs.existsSync(placeholderPath)) {
    // Criar um arquivo placeholder simples
    fs.writeFileSync(placeholderPath, '');
    console.log(`✅ Placeholder criado: ${hero.id}.png`);
  }
});

console.log('✅ Placeholders criados!');
console.log('💡 Para adicionar imagens reais, baixe-as do Epic7DB e coloque em public/heroes/'); 