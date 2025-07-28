const fs = require('fs');
const path = require('path');

// Hero data sem aspas problemáticas
const heroes = [
  {
    id: 'vildred',
    name: 'Vildred',
    rarity: 5,
    element: 'EARTH',
    role: 'THIEF',
    isML: false,
    image: '/heroes/vildred.png',
    description: 'A master swordsman seeking revenge against those who wronged him.',
    story: 'Once a knight of Wintenberg, Vildred was betrayed and executed, only to be resurrected by dark magic.',
    specialty: 'AoE farming and cleaving',
    tags: ['farmer', 'cleaver', 'speed'],
    difficulty: 'Easy',
    usage: { pve: 10, pvp: 8, rta: 7, guildWar: 8 },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: { attack: 1228, health: 4572, defense: 473, speed: 117 },
      maxStats: { attack: 1871, health: 6897, defense: 716, speed: 117 },
      awakening: { attack: 643, health: 2325, defense: 243 }
    },
    tierData: {
      pvp: { arena: 'S', guildWar: 'A', rta: 'B' },
      pve: { wyvern: 'B', golem: 'A', banshee: 'A', azimanak: 'S', caides: 'A', labyrinth: 'S', abyss: 'A' }
    }
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
    story: 'Bellona leads her mercenary group with tactical brilliance and unwavering loyalty.',
    specialty: 'Boss hunting and AoE damage',
    tags: ['boss-killer', 'aoe', 'defense-break'],
    difficulty: 'Medium',
    usage: { pve: 9, pvp: 6, rta: 5, guildWar: 7 },
    strengths: ['Max HP% damage', 'AoE defense break', 'Excellent vs bosses'],
    weaknesses: ['RNG dependent', 'Needs good gear', 'Limited in PvP'],
    synergies: ['charles', 'ssb', 'vivian'],
    counters: ['elena', 'dizzy', 'basar'],
    stats: {
      baseStats: { attack: 1119, health: 5016, defense: 571, speed: 101 },
      maxStats: { attack: 1704, health: 7576, defense: 864, speed: 101 },
      awakening: { attack: 585, health: 2560, defense: 293 }
    },
    tierData: {
      pvp: { arena: 'B', guildWar: 'B', rta: 'C' },
      pve: { wyvern: 'A', golem: 'S', banshee: 'S', azimanak: 'S', caides: 'S', labyrinth: 'S', abyss: 'S' }
    }
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
    story: 'Luna serves as a loyal guardian, wielding the power of dragons in battle.',
    specialty: 'Single target DPS and Wyvern hunting',
    tags: ['single-target', 'wyvern', 'defense-break'],
    difficulty: 'Easy',
    usage: { pve: 8, pvp: 5, rta: 4, guildWar: 6 },
    strengths: ['High single target damage', 'Defense break', 'Good for Wyvern'],
    weaknesses: ['Limited utility', 'Outdated in current meta'],
    synergies: ['general-purrgis', 'furious', 'alexa'],
    counters: ['fallen-cecilia', 'fcermia', 'ravi'],
    stats: {
      baseStats: { attack: 1359, health: 5738, defense: 627, speed: 102 },
      maxStats: { attack: 2069, health: 8671, defense: 950, speed: 102 },
      awakening: { attack: 710, health: 2933, defense: 323 }
    },
    tierData: {
      pvp: { arena: 'C', guildWar: 'C', rta: 'C' },
      pve: { wyvern: 'A', golem: 'B', banshee: 'C', azimanak: 'C', caides: 'B', labyrinth: 'B', abyss: 'B' }
    }
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
    story: 'A noble knight with powerful defensive abilities. Kraus unwavering loyalty and defensive prowess make him a reliable protector.',
    specialty: 'Tank and AoE damage',
    tags: ['tank', 'aoe', 'defense'],
    difficulty: 'Medium',
    usage: { pve: 7, pvp: 8, rta: 7, guildWar: 8 },
    strengths: ['Excellent tank', 'AoE damage', 'Strong defensive abilities'],
    weaknesses: ['Slow speed', 'Limited utility', 'Needs good gear'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['basar', 'seaside-bellona', 'lilias'],
    stats: {
      baseStats: { attack: 678, health: 6789, defense: 678, speed: 98 },
      maxStats: { attack: 1032, health: 10256, defense: 1028, speed: 98 },
      awakening: { attack: 354, health: 3467, defense: 350 }
    },
    tierData: {
      pvp: { arena: 'A', guildWar: 'A', rta: 'B' },
      pve: { wyvern: 'B', golem: 'A', banshee: 'B', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' }
    }
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
    story: 'A martial artist with incredible strength and fighting spirit. Kens mastery of martial arts makes him a formidable warrior.',
    specialty: 'Bruiser and sustain',
    tags: ['bruiser', 'sustain', 'counter'],
    difficulty: 'Medium',
    usage: { pve: 7, pvp: 7, rta: 6, guildWar: 7 },
    strengths: ['Strong bruiser', 'Self sustain', 'Counter attacks'],
    weaknesses: ['RNG dependent', 'Needs good gear', 'Can be controlled'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: { attack: 1234, health: 5678, defense: 567, speed: 105 },
      maxStats: { attack: 1878, health: 8576, defense: 857, speed: 105 },
      awakening: { attack: 644, health: 2898, defense: 290 }
    },
    tierData: {
      pvp: { arena: 'B', guildWar: 'B', rta: 'C' },
      pve: { wyvern: 'C', golem: 'A', banshee: 'A', azimanak: 'A', caides: 'A', labyrinth: 'A', abyss: 'A' }
    }
  }
];

// Gerar TypeScript code
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
    zodiac: Zodiac.ARIES,
    image: '${hero.image}',
    description: '${hero.description}',
    story: '${hero.story}',
    isML: ${hero.isML},
    releaseDate: '2018-08-30',
    specialty: '${hero.specialty}',
    tags: [${hero.tags.map(tag => `'${tag}'`).join(', ')}],
    difficulty: '${hero.difficulty}',
    usage: {
      pve: ${hero.usage.pve},
      pvp: ${hero.usage.pvp},
      rta: ${hero.usage.rta},
      guildWar: ${hero.usage.guildWar}
    },
    strengths: [${hero.strengths.map(s => `'${s}'`).join(', ')}],
    weaknesses: [${hero.weaknesses.map(w => `'${w}'`).join(', ')}],
    synergies: [${hero.synergies.map(s => `'${s}'`).join(', ')}],
    counters: [${hero.counters.map(c => `'${c}'`).join(', ')}],
    stats: {
      baseStats: {
        attack: ${hero.stats.baseStats.attack},
        health: ${hero.stats.baseStats.health},
        defense: ${hero.stats.baseStats.defense},
        speed: ${hero.stats.baseStats.speed}
      },
      maxStats: {
        attack: ${hero.stats.maxStats.attack},
        health: ${hero.stats.maxStats.health},
        defense: ${hero.stats.maxStats.defense},
        speed: ${hero.stats.maxStats.speed}
      },
      awakening: {
        attack: ${hero.stats.awakening.attack},
        health: ${hero.stats.awakening.health},
        defense: ${hero.stats.awakening.defense}
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

// Escrever arquivo limpo
const filePath = path.join(__dirname, 'src/lib/heroDatabase.ts');
fs.writeFileSync(filePath, tsCode);

console.log('✅ Banco de dados FINAL criado!');
console.log(`- ${heroes.length} heróis incluídos`);
console.log('- SEM aspas problemáticas');
console.log('- Formatação correta'); 