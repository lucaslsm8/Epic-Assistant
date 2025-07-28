const fs = require('fs');
const path = require('path');

// Epic Seven Heroes Database Generator
const heroes = [
  // RGB 5★ Heroes
  {
    id: 'vildred',
    name: 'Vildred',
    rarity: 5,
    element: 'EARTH',
    role: 'THIEF',
    isML: false,
    image: '/heroes/vildred.png',
    description: 'A master swordsman seeking revenge against those who wronged him.',
    specialty: 'AoE farming and cleaving',
    tags: ['farmer', 'cleaver', 'speed'],
    difficulty: 'Easy',
    usage: { pve: 10, pvp: 8, rta: 7, guildWar: 8 },
    tierData: { pvp: { arena: 'S', guildWar: 'A', rta: 'B' }, pve: { wyvern: 'B', golem: 'A', banshee: 'A', azimanak: 'S', caides: 'A', labyrinth: 'S', abyss: 'A' } }
  },
  {
    id: 'bellona',
    name: 'Bellona',
    rarity: 5,
    element: 'EARTH',
    role: 'RANGER',
    isML: false,
    image: '/heroes/bellona.png',
    description: 'A genius strategist and commander of the Eureka Mercenary Corps.',
    specialty: 'Boss hunting and AoE damage',
    tags: ['boss-killer', 'aoe', 'defense-break'],
    difficulty: 'Medium',
    usage: { pve: 9, pvp: 6, rta: 5, guildWar: 7 },
    tierData: { pvp: { arena: 'B', guildWar: 'B', rta: 'C' }, pve: { wyvern: 'A', golem: 'S', banshee: 'S', azimanak: 'S', caides: 'S', labyrinth: 'S', abyss: 'S' } }
  },
  {
    id: 'luna',
    name: 'Luna',
    rarity: 5,
    element: 'ICE',
    role: 'WARRIOR',
    isML: false,
    image: '/heroes/luna.png',
    description: 'A powerful dragon knight with immense physical strength.',
    specialty: 'Single target DPS and Wyvern hunting',
    tags: ['single-target', 'wyvern', 'defense-break'],
    difficulty: 'Easy',
    usage: { pve: 8, pvp: 5, rta: 4, guildWar: 6 },
    tierData: { pvp: { arena: 'C', guildWar: 'C', rta: 'C' }, pve: { wyvern: 'A', golem: 'B', banshee: 'C', azimanak: 'C', caides: 'B', labyrinth: 'B', abyss: 'B' } }
  },
  {
    id: 'krau',
    name: 'Krau',
    rarity: 5,
    element: 'ICE',
    role: 'KNIGHT',
    isML: false,
    image: '/heroes/krau.png',
    description: 'A noble knight with powerful defensive abilities.',
    specialty: 'Tank and AoE damage',
    tags: ['tank', 'aoe', 'defense'],
    difficulty: 'Medium',
    usage: { pve: 7, pvp: 8, rta: 7, guildWar: 8 },
    tierData: { pvp: { arena: 'A', guildWar: 'A', rta: 'B' }, pve: { wyvern: 'B', golem: 'A', banshee: 'B', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'ken',
    name: 'Ken',
    rarity: 5,
    element: 'FIRE',
    role: 'WARRIOR',
    isML: false,
    image: '/heroes/ken.png',
    description: 'A martial artist with incredible strength and fighting spirit.',
    specialty: 'Bruiser and sustain',
    tags: ['bruiser', 'sustain', 'counter'],
    difficulty: 'Medium',
    usage: { pve: 7, pvp: 7, rta: 6, guildWar: 7 },
    tierData: { pvp: { arena: 'B', guildWar: 'B', rta: 'C' }, pve: { wyvern: 'C', golem: 'A', banshee: 'B', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'charles',
    name: 'Charles',
    rarity: 5,
    element: 'EARTH',
    role: 'KNIGHT',
    isML: false,
    image: '/heroes/charles.png',
    description: 'A legendary knight with powerful counter-attack abilities.',
    specialty: 'Counter-attack and buff removal',
    tags: ['counter', 'buff-removal', 'tank'],
    difficulty: 'Hard',
    usage: { pve: 8, pvp: 9, rta: 8, guildWar: 9 },
    tierData: { pvp: { arena: 'S', guildWar: 'S', rta: 'A' }, pve: { wyvern: 'B', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'S', abyss: 'A' } }
  },
  {
    id: 'tywin',
    name: 'Tywin',
    rarity: 5,
    element: 'ICE',
    role: 'KNIGHT',
    isML: false,
    image: '/heroes/tywin.png',
    description: 'A noble commander with powerful support abilities.',
    specialty: 'Support and CR push',
    tags: ['support', 'cr-push', 'defense-break'],
    difficulty: 'Medium',
    usage: { pve: 8, pvp: 7, rta: 6, guildWar: 7 },
    tierData: { pvp: { arena: 'B', guildWar: 'B', rta: 'C' }, pve: { wyvern: 'A', golem: 'A', banshee: 'B', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'sez',
    name: 'Sez',
    rarity: 5,
    element: 'WIND',
    role: 'THIEF',
    isML: false,
    image: '/heroes/sez.png',
    description: 'A ruthless assassin with deadly precision.',
    specialty: 'Single target burst damage',
    tags: ['burst', 'single-target', 'assassin'],
    difficulty: 'Medium',
    usage: { pve: 6, pvp: 7, rta: 6, guildWar: 7 },
    tierData: { pvp: { arena: 'B', guildWar: 'B', rta: 'C' }, pve: { wyvern: 'C', golem: 'B', banshee: 'A', azimanak: 'B', caides: 'B', labyrinth: 'B', abyss: 'B' } }
  },
  {
    id: 'sigret',
    name: 'Sigret',
    rarity: 5,
    element: 'ICE',
    role: 'WARRIOR',
    isML: false,
    image: '/heroes/sigret.png',
    description: 'A powerful warrior with extinction abilities.',
    specialty: 'Extinction and single target damage',
    tags: ['extinction', 'single-target', 'boss-killer'],
    difficulty: 'Medium',
    usage: { pve: 8, pvp: 8, rta: 7, guildWar: 8 },
    tierData: { pvp: { arena: 'A', guildWar: 'A', rta: 'B' }, pve: { wyvern: 'S', golem: 'A', banshee: 'S', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'kayron',
    name: 'Kayron',
    rarity: 5,
    element: 'FIRE',
    role: 'THIEF',
    isML: false,
    image: '/heroes/kayron.png',
    description: 'A mysterious swordsman with immortality.',
    specialty: 'Immortality and AoE damage',
    tags: ['immortality', 'aoe', 'cleaver'],
    difficulty: 'Hard',
    usage: { pve: 7, pvp: 8, rta: 7, guildWar: 8 },
    tierData: { pvp: { arena: 'A', guildWar: 'A', rta: 'B' }, pve: { wyvern: 'B', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'iseria',
    name: 'Iseria',
    rarity: 5,
    element: 'EARTH',
    role: 'RANGER',
    isML: false,
    image: '/heroes/iseria.png',
    description: 'A skilled archer with powerful support abilities.',
    specialty: 'Support and skill reset',
    tags: ['support', 'skill-reset', 'defense-break'],
    difficulty: 'Hard',
    usage: { pve: 8, pvp: 9, rta: 8, guildWar: 9 },
    tierData: { pvp: { arena: 'S', guildWar: 'S', rta: 'A' }, pve: { wyvern: 'A', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'S', abyss: 'A' } }
  },
  {
    id: 'tamarinne',
    name: 'Tamarinne',
    rarity: 5,
    element: 'FIRE',
    role: 'SOUL_WEAVER',
    isML: false,
    image: '/heroes/tamarinne.png',
    description: 'An idol with powerful healing and support abilities.',
    specialty: 'Healing and CR push',
    tags: ['heal', 'cr-push', 'support'],
    difficulty: 'Easy',
    usage: { pve: 10, pvp: 6, rta: 5, guildWar: 6 },
    tierData: { pvp: { arena: 'C', guildWar: 'C', rta: 'C' }, pve: { wyvern: 'S', golem: 'S', banshee: 'S', azimanak: 'S', caides: 'S', labyrinth: 'S', abyss: 'S' } }
  },
  {
    id: 'yufine',
    name: 'Yufine',
    rarity: 5,
    element: 'EARTH',
    role: 'WARRIOR',
    isML: false,
    image: '/heroes/yufine.png',
    description: 'A dragon knight with powerful AoE abilities.',
    specialty: 'AoE damage and buff removal',
    tags: ['aoe', 'buff-removal', 'dragon'],
    difficulty: 'Medium',
    usage: { pve: 7, pvp: 7, rta: 6, guildWar: 7 },
    tierData: { pvp: { arena: 'B', guildWar: 'B', rta: 'C' }, pve: { wyvern: 'B', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },

  // ML 5★ Heroes
  {
    id: 'arbiter-vildred',
    name: 'Arbiter Vildred',
    rarity: 5,
    element: 'DARK',
    role: 'THIEF',
    isML: true,
    baseHero: 'vildred',
    image: '/heroes/arbiter-vildred.png',
    description: 'The reborn Vildred, now wielding the power of darkness and vengeance.',
    specialty: 'Resurrection and team wiping',
    tags: ['revive', 'cleaver', 'immortality'],
    difficulty: 'Medium',
    usage: { pve: 9, pvp: 9, rta: 8, guildWar: 9 },
    tierData: { pvp: { arena: 'SS', guildWar: 'SS', rta: 'S' }, pve: { wyvern: 'B', golem: 'S', banshee: 'S', azimanak: 'S', caides: 'S', labyrinth: 'S', abyss: 'S' } }
  },
  {
    id: 'ruele-of-light',
    name: 'Ruele of Light',
    rarity: 5,
    element: 'LIGHT',
    role: 'SOUL_WEAVER',
    isML: true,
    baseHero: 'destina',
    image: '/heroes/ruele-of-light.png',
    description: 'The Goddess of Light, capable of bringing allies back from death.',
    specialty: 'Full resurrection and powerful healing',
    tags: ['revive', 'heal', 'cleanse'],
    difficulty: 'Easy',
    usage: { pve: 8, pvp: 9, rta: 9, guildWar: 9 },
    tierData: { pvp: { arena: 'SS', guildWar: 'SS', rta: 'SS' }, pve: { wyvern: 'C', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'S', abyss: 'S' } }
  },
  {
    id: 'fallen-cecilia',
    name: 'Fallen Cecilia',
    rarity: 5,
    element: 'DARK',
    role: 'KNIGHT',
    isML: true,
    baseHero: 'cecilia',
    image: '/heroes/fallen-cecilia.png',
    description: 'A corrupted knight with powerful defensive abilities.',
    specialty: 'Tank and barrier creation',
    tags: ['tank', 'barrier', 'defense'],
    difficulty: 'Hard',
    usage: { pve: 7, pvp: 9, rta: 8, guildWar: 9 },
    tierData: { pvp: { arena: 'SS', guildWar: 'SS', rta: 'S' }, pve: { wyvern: 'B', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'judge-kise',
    name: 'Judge Kise',
    rarity: 5,
    element: 'LIGHT',
    role: 'THIEF',
    isML: true,
    baseHero: 'kise',
    image: '/heroes/judge-kise.png',
    description: 'A divine judge with powerful AoE abilities.',
    specialty: 'AoE damage and buff removal',
    tags: ['aoe', 'buff-removal', 'cleaver'],
    difficulty: 'Medium',
    usage: { pve: 7, pvp: 8, rta: 7, guildWar: 8 },
    tierData: { pvp: { arena: 'A', guildWar: 'A', rta: 'B' }, pve: { wyvern: 'B', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'specter-tenebria',
    name: 'Specter Tenebria',
    rarity: 5,
    element: 'DARK',
    role: 'MAGE',
    isML: true,
    baseHero: 'tenebria',
    image: '/heroes/specter-tenebria.png',
    description: 'A spectral mage with powerful control abilities.',
    specialty: 'Control and AoE damage',
    tags: ['control', 'aoe', 'silence'],
    difficulty: 'Hard',
    usage: { pve: 6, pvp: 9, rta: 8, guildWar: 9 },
    tierData: { pvp: { arena: 'SS', guildWar: 'SS', rta: 'S' }, pve: { wyvern: 'C', golem: 'B', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'dark-corvus',
    name: 'Dark Corvus',
    rarity: 5,
    element: 'DARK',
    role: 'WARRIOR',
    isML: true,
    baseHero: 'corvus',
    image: '/heroes/dark-corvus.png',
    description: 'A corrupted warrior with immense defensive power.',
    specialty: 'Tank and counter-attack',
    tags: ['tank', 'counter', 'bruiser'],
    difficulty: 'Hard',
    usage: { pve: 6, pvp: 8, rta: 7, guildWar: 8 },
    tierData: { pvp: { arena: 'A', guildWar: 'A', rta: 'B' }, pve: { wyvern: 'C', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'martial-artist-ken',
    name: 'Martial Artist Ken',
    rarity: 5,
    element: 'FIRE',
    role: 'WARRIOR',
    isML: true,
    baseHero: 'ken',
    image: '/heroes/martial-artist-ken.png',
    description: 'A master martial artist with powerful counter abilities.',
    specialty: 'Counter-attack and sustain',
    tags: ['counter', 'sustain', 'bruiser'],
    difficulty: 'Hard',
    usage: { pve: 7, pvp: 8, rta: 7, guildWar: 8 },
    tierData: { pvp: { arena: 'A', guildWar: 'A', rta: 'B' }, pve: { wyvern: 'C', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'assassin-cidd',
    name: 'Assassin Cidd',
    rarity: 5,
    element: 'EARTH',
    role: 'THIEF',
    isML: true,
    baseHero: 'cidd',
    image: '/heroes/assassin-cidd.png',
    description: 'A deadly assassin with speed and precision.',
    specialty: 'Speed and single target burst',
    tags: ['speed', 'burst', 'assassin'],
    difficulty: 'Medium',
    usage: { pve: 6, pvp: 7, rta: 6, guildWar: 7 },
    tierData: { pvp: { arena: 'B', guildWar: 'B', rta: 'C' }, pve: { wyvern: 'C', golem: 'B', banshee: 'A', azimanak: 'B', caides: 'B', labyrinth: 'B', abyss: 'B' } }
  },
  {
    id: 'assassin-coli',
    name: 'Assassin Coli',
    rarity: 5,
    element: 'ICE',
    role: 'THIEF',
    isML: true,
    baseHero: 'coli',
    image: '/heroes/assassin-coli.png',
    description: 'A stealthy assassin with powerful single target damage.',
    specialty: 'Stealth and single target burst',
    tags: ['stealth', 'burst', 'assassin'],
    difficulty: 'Medium',
    usage: { pve: 5, pvp: 7, rta: 6, guildWar: 7 },
    tierData: { pvp: { arena: 'B', guildWar: 'B', rta: 'C' }, pve: { wyvern: 'C', golem: 'B', banshee: 'A', azimanak: 'B', caides: 'B', labyrinth: 'B', abyss: 'B' } }
  },
  {
    id: 'auxiliary-lots',
    name: 'Auxiliary Lots',
    rarity: 5,
    element: 'LIGHT',
    role: 'MAGE',
    isML: true,
    baseHero: 'lots',
    image: '/heroes/auxiliary-lots.png',
    description: 'A powerful mage with CR manipulation abilities.',
    specialty: 'CR push and support',
    tags: ['cr-push', 'support', 'mage'],
    difficulty: 'Medium',
    usage: { pve: 7, pvp: 8, rta: 7, guildWar: 8 },
    tierData: { pvp: { arena: 'A', guildWar: 'A', rta: 'B' }, pve: { wyvern: 'A', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'challenger-dominiel',
    name: 'Challenger Dominiel',
    rarity: 5,
    element: 'DARK',
    role: 'MAGE',
    isML: true,
    baseHero: 'dominiel',
    image: '/heroes/challenger-dominiel.png',
    description: 'A powerful mage with critical hit abilities.',
    specialty: 'Critical hit and AoE damage',
    tags: ['crit', 'aoe', 'mage'],
    difficulty: 'Medium',
    usage: { pve: 6, pvp: 7, rta: 6, guildWar: 7 },
    tierData: { pvp: { arena: 'B', guildWar: 'B', rta: 'C' }, pve: { wyvern: 'B', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'blood-blade-karin',
    name: 'Blood Blade Karin',
    rarity: 5,
    element: 'DARK',
    role: 'THIEF',
    isML: true,
    baseHero: 'karin',
    image: '/heroes/blood-blade-karin.png',
    description: 'A deadly assassin with stealth abilities.',
    specialty: 'Stealth and single target burst',
    tags: ['stealth', 'burst', 'assassin'],
    difficulty: 'Medium',
    usage: { pve: 5, pvp: 7, rta: 6, guildWar: 7 },
    tierData: { pvp: { arena: 'B', guildWar: 'B', rta: 'C' }, pve: { wyvern: 'C', golem: 'B', banshee: 'A', azimanak: 'B', caides: 'B', labyrinth: 'B', abyss: 'B' } }
  },
  {
    id: 'shadow-rose',
    name: 'Shadow Rose',
    rarity: 5,
    element: 'DARK',
    role: 'KNIGHT',
    isML: true,
    baseHero: 'rose',
    image: '/heroes/shadow-rose.png',
    description: 'A corrupted knight with powerful AoE abilities.',
    specialty: 'AoE damage and CR push',
    tags: ['aoe', 'cr-push', 'knight'],
    difficulty: 'Medium',
    usage: { pve: 6, pvp: 7, rta: 6, guildWar: 7 },
    tierData: { pvp: { arena: 'B', guildWar: 'B', rta: 'C' }, pve: { wyvern: 'B', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'silver-blade-aramintha',
    name: 'Silver Blade Aramintha',
    rarity: 5,
    element: 'LIGHT',
    role: 'MAGE',
    isML: true,
    baseHero: 'aramintha',
    image: '/heroes/silver-blade-aramintha.png',
    description: 'A divine mage with powerful AoE abilities.',
    specialty: 'AoE damage and burn',
    tags: ['aoe', 'burn', 'mage'],
    difficulty: 'Medium',
    usage: { pve: 7, pvp: 7, rta: 6, guildWar: 7 },
    tierData: { pvp: { arena: 'B', guildWar: 'B', rta: 'C' }, pve: { wyvern: 'A', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'blaze-dingo',
    name: 'Blaze Dingo',
    rarity: 5,
    element: 'FIRE',
    role: 'SOUL_WEAVER',
    isML: true,
    baseHero: 'dingo',
    image: '/heroes/blaze-dingo.png',
    description: 'A fiery healer with powerful support abilities.',
    specialty: 'Healing and attack buff',
    tags: ['heal', 'attack-buff', 'support'],
    difficulty: 'Medium',
    usage: { pve: 8, pvp: 6, rta: 5, guildWar: 6 },
    tierData: { pvp: { arena: 'C', guildWar: 'C', rta: 'C' }, pve: { wyvern: 'A', golem: 'S', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'guider-aither',
    name: 'Guider Aither',
    rarity: 5,
    element: 'LIGHT',
    role: 'SOUL_WEAVER',
    isML: true,
    baseHero: 'aither',
    image: '/heroes/guider-aither.png',
    description: 'A divine healer with powerful support abilities.',
    specialty: 'Healing and CR push',
    tags: ['heal', 'cr-push', 'support'],
    difficulty: 'Medium',
    usage: { pve: 7, pvp: 6, rta: 5, guildWar: 6 },
    tierData: { pvp: { arena: 'C', guildWar: 'C', rta: 'C' }, pve: { wyvern: 'A', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  },
  {
    id: 'wanderer-silk',
    name: 'Wanderer Silk',
    rarity: 5,
    element: 'LIGHT',
    role: 'RANGER',
    isML: true,
    baseHero: 'silk',
    image: '/heroes/wanderer-silk.png',
    description: 'A divine archer with speed and precision.',
    specialty: 'Speed and single target damage',
    tags: ['speed', 'single-target', 'ranger'],
    difficulty: 'Medium',
    usage: { pve: 6, pvp: 7, rta: 6, guildWar: 7 },
    tierData: { pvp: { arena: 'B', guildWar: 'B', rta: 'C' }, pve: { wyvern: 'B', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' } }
  }
];

// Generate TypeScript code
let tsCode = `import { Hero, Element, Role, Zodiac, TierRank } from '@/types/epic-seven';

// Epic Seven Heroes Database - ${heroes.length} heroes
export const heroDatabase: Hero[] = [
`;

heroes.forEach((hero, index) => {
  tsCode += `  {
    id: '${hero.id}',
    name: '${hero.name}',
    rarity: ${hero.rarity},
    element: Element.${hero.element},
    role: Role.${hero.role},
    zodiac: Zodiac.ARIES, // Placeholder
    image: '${hero.image}',
    description: '${hero.description}',
    story: 'Story for ${hero.name}...',
    isML: ${hero.isML},
    ${hero.baseHero ? `baseHero: '${hero.baseHero}',` : ''}
    releaseDate: '2018-08-30', // Placeholder
    specialty: '${hero.specialty}',
    tags: [${hero.tags.map(tag => `'${tag}'`).join(', ')}],
    difficulty: '${hero.difficulty}',
    usage: {
      pve: ${hero.usage.pve},
      pvp: ${hero.usage.pvp},
      rta: ${hero.usage.rta},
      guildWar: ${hero.usage.guildWar}
    },
    strengths: ['Strength 1', 'Strength 2', 'Strength 3'],
    weaknesses: ['Weakness 1', 'Weakness 2', 'Weakness 3'],
    synergies: ['synergy-1', 'synergy-2', 'synergy-3'],
    counters: ['counter-1', 'counter-2', 'counter-3'],
    stats: {
      baseStats: {
        attack: 1200,
        health: 5000,
        defense: 500,
        speed: 110
      },
      maxStats: {
        attack: 1800,
        health: 7500,
        defense: 750,
        speed: 110
      },
      awakening: {
        attack: 600,
        health: 2500,
        defense: 250
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.${hero.tierData.pvp.arena},
        guildWar: TierRank.${hero.tierData.pvp.guildWar},
        rta: TierRank.${hero.tierData.pvp.rta}
      },
      pve: {
        wyvern: TierRank.${hero.tierData.pve.wyvern},
        golem: TierRank.${hero.tierData.pve.golem},
        banshee: TierRank.${hero.tierData.pve.banshee},
        azimanak: TierRank.${hero.tierData.pve.azimanak},
        caides: TierRank.${hero.tierData.pve.caides},
        labyrinth: TierRank.${hero.tierData.pve.labyrinth},
        abyss: TierRank.${hero.tierData.pve.abyss}
      },
      lastUpdated: '2024-01-15'
    }
  }${index < heroes.length - 1 ? ',' : ''}
`;
});

tsCode += `];

// Helper functions for filtering and searching
export const searchHeroes = (heroes: Hero[], searchTerm: string): Hero[] => {
  if (!searchTerm) return heroes;
  
  const term = searchTerm.toLowerCase();
  return heroes.filter(hero => 
    hero.name.toLowerCase().includes(term) ||
    hero.tags.some(tag => tag.toLowerCase().includes(term)) ||
    hero.specialty?.toLowerCase().includes(term) ||
    hero.description.toLowerCase().includes(term)
  );
};

export const filterHeroesByElement = (heroes: Hero[], element: string): Hero[] => {
  if (element === 'all') return heroes;
  return heroes.filter(hero => hero.element === element);
};

export const filterHeroesByRole = (heroes: Hero[], role: string): Hero[] => {
  if (role === 'all') return heroes;
  return heroes.filter(hero => hero.role === role);
};

export const filterHeroesByRarity = (heroes: Hero[], rarity: string): Hero[] => {
  if (rarity === 'all') return heroes;
  return heroes.filter(hero => hero.rarity === parseInt(rarity));
};

export const filterHeroesByML = (heroes: Hero[], showML: boolean): Hero[] => {
  return heroes.filter(hero => hero.isML === showML || !showML);
};

export const sortHeroes = (heroes: Hero[], sortBy: string): Hero[] => {
  switch (sortBy) {
    case 'name':
      return [...heroes].sort((a, b) => a.name.localeCompare(b.name));
    case 'rarity':
      return [...heroes].sort((a, b) => b.rarity - a.rarity);
    case 'element':
      return [...heroes].sort((a, b) => a.element.localeCompare(b.element));
    case 'tier':
      const tierOrder = { 'SS': 6, 'S': 5, 'A': 4, 'B': 3, 'C': 2, 'D': 1 };
      return [...heroes].sort((a, b) => {
        const aOverall = a.tierData?.pvp.arena || TierRank.C;
        const bOverall = b.tierData?.pvp.arena || TierRank.C;
        return (tierOrder[bOverall as keyof typeof tierOrder] || 0) - 
               (tierOrder[aOverall as keyof typeof tierOrder] || 0);
      });
    default:
      return heroes;
  }
};

export const getHeroById = (id: string): Hero | undefined => {
  return heroDatabase.find(hero => hero.id === id);
};

export const getElementColor = (element: Element): string => {
  switch (element) {
    case Element.FIRE:
      return 'from-red-500 to-orange-500';
    case Element.ICE:
      return 'from-blue-400 to-cyan-400';
    case Element.EARTH:
      return 'from-green-500 to-emerald-500';
    case Element.LIGHT:
      return 'from-yellow-300 to-amber-400';
    case Element.DARK:
      return 'from-purple-500 to-violet-600';
    default:
      return 'from-gray-400 to-gray-500';
  }
};

export const getRoleIcon = (role: Role): string => {
  switch (role) {
    case Role.KNIGHT:
      return '🛡️';
    case Role.WARRIOR:
      return '⚔️';
    case Role.THIEF:
      return '🗡️';
    case Role.RANGER:
      return '🏹';
    case Role.MAGE:
      return '🔮';
    case Role.SOUL_WEAVER:
      return '💊';
    default:
      return '❓';
  }
};
`;

// Write to file
fs.writeFileSync(path.join(__dirname, 'src/lib/heroDatabase.ts'), tsCode);

console.log(`Generated hero database with ${heroes.length} heroes:`);
console.log(`- RGB Heroes: ${heroes.filter(h => !h.isML).length}`);
console.log(`- ML Heroes: ${heroes.filter(h => h.isML).length}`);
console.log(`- Total: ${heroes.length}`);

// Check for duplicates
const ids = heroes.map(h => h.id);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicates.length > 0) {
  console.log('⚠️  Duplicate IDs found:', duplicates);
} else {
  console.log('✅ No duplicate IDs found');
} 