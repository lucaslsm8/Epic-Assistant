import { Hero, Element, Role, Zodiac, TierRank } from '@/types/epic-seven';

// Epic Seven Heroes Database - 29 heroes
export const heroDatabase: Hero[] = [
  {
    id: 'vildred',
    name: 'Vildred',
    rarity: 5,
    element: Element.EARTH,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/vildred.png',
    description: 'A master swordsman seeking revenge against those who wronged him.',
    story: 'Once a knight of Wintenberg, Vildred was betrayed and executed, only to be resurrected by dark magic. He now seeks revenge against those who wronged him.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'AoE farming and cleaving',
    tags: ['farmer', 'cleaver', \'speed'],
    difficulty: 'Easy',
    usage: {
      pve: 10,
      pvp: 8,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.S,
        guildWar: TierRank.A,
        rta: TierRank.B
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.S,
        caides: TierRank.A,
        labyrinth: TierRank.S,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'bellona',
    name: 'Bellona',
    rarity: 5,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/bellona.png',
    description: 'A genius strategist and commander of the Eureka Mercenary Corps.',
    story: 'Bellona leads her mercenary group with tactical brilliance and unwavering loyalty. Her strategic mind makes her a formidable opponent.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Boss hunting and AoE damage',
    tags: ['boss-killer', 'aoe', 'defense-break'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 6,
      rta: 5,
      guildWar: 7
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.A,
        golem: TierRank.S,
        banshee: TierRank.S,
        azimanak: TierRank.S,
        caides: TierRank.S,
        labyrinth: TierRank.S,
        abyss: TierRank.S
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'luna',
    name: 'Luna',
    rarity: 5,
    element: Element.ICE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/luna.png',
    description: 'A powerful dragon knight with immense physical strength.',
    story: 'Luna serves as a loyal guardian, wielding the power of dragons in battle. Her dragon heritage grants her immense physical strength.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Single target DPS and Wyvern hunting',
    tags: [\'single-target', 'wyvern', 'defense-break'],
    difficulty: 'Easy',
    usage: {
      pve: 8,
      pvp: 5,
      rta: 4,
      guildWar: 6
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.A,
        golem: TierRank.B,
        banshee: TierRank.C,
        azimanak: TierRank.C,
        caides: TierRank.B,
        labyrinth: TierRank.B,
        abyss: TierRank.B
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'krau',
    name: 'Krau',
    rarity: 5,
    element: Element.ICE,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/krau.png',
    description: 'A noble knight with powerful defensive abilities.',
    story: 'A noble knight with powerful defensive abilities. Krau\\'s unwavering loyalty and defensive prowess make him a reliable protector.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Tank and AoE damage',
    tags: ['tank', 'aoe', 'defense'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 8,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.A,
        guildWar: TierRank.A,
        rta: TierRank.B
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'ken',
    name: 'Ken',
    rarity: 5,
    element: Element.FIRE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/ken.png',
    description: 'A martial artist with incredible strength and fighting spirit.',
    story: 'A martial artist with incredible strength and fighting spirit. Ken\\'s mastery of martial arts makes him a formidable warrior.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Bruiser and sustain',
    tags: ['bruiser', \'sustain', 'counter'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.C,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'charles',
    name: 'Charles',
    rarity: 5,
    element: Element.EARTH,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/charles.png',
    description: 'A legendary knight with powerful counter-attack abilities.',
    story: 'A legendary knight with powerful counter-attack abilities. Charles' experience and skill make him a master of combat.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Counter-attack and buff removal',
    tags: ['counter', 'buff-removal', 'tank'],
    difficulty: 'Hard',
    usage: {
      pve: 8,
      pvp: 9,
      rta: 8,
      guildWar: 9
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.S,
        guildWar: TierRank.S,
        rta: TierRank.A
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.S,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'tywin',
    name: 'Tywin',
    rarity: 5,
    element: Element.ICE,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/tywin.png',
    description: 'A noble commander with powerful support abilities.',
    story: 'A noble commander with powerful support abilities. Tywin\\'s leadership and tactical skills make him an invaluable ally.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Support and CR push',
    tags: [\'support', 'cr-push', 'defense-break'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.A,
        golem: TierRank.A,
        banshee: TierRank.B,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: \'sez',
    name: 'Sez',
    rarity: 5,
    element: Element.ICE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/sez.png',
    description: 'A ruthless assassin with deadly precision.',
    story: 'A ruthless assassin with deadly precision. Sez\'s stealth and assassination skills make him a feared opponent.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Single target burst damage',
    tags: ['burst', \'single-target', 'assassin'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.C,
        golem: TierRank.B,
        banshee: TierRank.A,
        azimanak: TierRank.B,
        caides: TierRank.B,
        labyrinth: TierRank.B,
        abyss: TierRank.B
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: \'sigret',
    name: 'Sigret',
    rarity: 5,
    element: Element.ICE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/sigret.png',
    description: 'A powerful warrior with extinction abilities.',
    story: 'A powerful warrior with extinction abilities. Sigret\'s ability to permanently eliminate enemies makes her a valuable asset.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Extinction and single target damage',
    tags: ['extinction', \'single-target', 'boss-killer'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 8,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.A,
        guildWar: TierRank.A,
        rta: TierRank.B
      },
      pve: {
        wyvern: TierRank.S,
        golem: TierRank.A,
        banshee: TierRank.S,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'kayron',
    name: 'Kayron',
    rarity: 5,
    element: Element.FIRE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/kayron.png',
    description: 'A mysterious swordsman with immortality.',
    story: 'A mysterious swordsman with immortality. Kayron\'s dark powers and immortality make him an unstoppable force.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Immortality and AoE damage',
    tags: ['immortality', 'aoe', 'cleaver'],
    difficulty: 'Hard',
    usage: {
      pve: 7,
      pvp: 8,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.A,
        guildWar: TierRank.A,
        rta: TierRank.B
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'iseria',
    name: 'Iseria',
    rarity: 5,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/iseria.png',
    description: 'A skilled archer with powerful support abilities.',
    story: 'A skilled archer with powerful support abilities. Iseria\'s tactical mind and support skills make her invaluable.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Support and skill reset',
    tags: [\'support', \'skill-reset', 'defense-break'],
    difficulty: 'Hard',
    usage: {
      pve: 8,
      pvp: 9,
      rta: 8,
      guildWar: 9
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.S,
        guildWar: TierRank.S,
        rta: TierRank.A
      },
      pve: {
        wyvern: TierRank.A,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.S,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'tamarinne',
    name: 'Tamarinne',
    rarity: 5,
    element: Element.FIRE,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/tamarinne.png',
    description: 'An idol with powerful healing and support abilities.',
    story: 'An idol with powerful healing and support abilities. Tamarinne\'s cheerful personality and healing powers bring hope to allies.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Healing and CR push',
    tags: ['heal', 'cr-push', \'support'],
    difficulty: 'Easy',
    usage: {
      pve: 10,
      pvp: 6,
      rta: 5,
      guildWar: 6
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.S,
        golem: TierRank.S,
        banshee: TierRank.S,
        azimanak: TierRank.S,
        caides: TierRank.S,
        labyrinth: TierRank.S,
        abyss: TierRank.S
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'yufine',
    name: 'Yufine',
    rarity: 5,
    element: Element.EARTH,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/yufine.png',
    description: 'A dragon knight with powerful AoE abilities.',
    story: 'A dragon knight with powerful AoE abilities. Yufine\'s dragon heritage grants her immense power and destructive capabilities.',
    isML: false,
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'AoE damage and buff removal',
    tags: ['aoe', 'buff-removal', 'dragon'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'arbiter-vildred',
    name: 'Arbiter Vildred',
    rarity: 5,
    element: Element.DARK,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/arbiter-vildred.png',
    description: 'The reborn Vildred, now wielding the power of darkness and vengeance.',
    story: 'Corrupted by dark magic, Vildred returns as an unstoppable force of destruction. His resurrection abilities make him a game-changer.',
    isML: true,
    baseHero: 'vildred',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Resurrection and team wiping',
    tags: ['revive', 'cleaver', 'immortality'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 9,
      rta: 8,
      guildWar: 9
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.SS,
        guildWar: TierRank.SS,
        rta: TierRank.S
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.S,
        banshee: TierRank.S,
        azimanak: TierRank.S,
        caides: TierRank.S,
        labyrinth: TierRank.S,
        abyss: TierRank.S
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'ruele-of-light',
    name: 'Ruele of Light',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/ruele-of-light.png',
    description: 'The Goddess of Light, capable of bringing allies back from death.',
    story: 'Story for Ruele of Light...',
    isML: true,
    baseHero: 'destina',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Full resurrection and powerful healing',
    tags: ['revive', 'heal', 'cleanse'],
    difficulty: 'Easy',
    usage: {
      pve: 8,
      pvp: 9,
      rta: 9,
      guildWar: 9
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.SS,
        guildWar: TierRank.SS,
        rta: TierRank.SS
      },
      pve: {
        wyvern: TierRank.C,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.S,
        abyss: TierRank.S
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'fallen-cecilia',
    name: 'Fallen Cecilia',
    rarity: 5,
    element: Element.DARK,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/fallen-cecilia.png',
    description: 'A corrupted knight with powerful defensive abilities.',
    story: 'A corrupted knight with powerful defensive abilities. Her dark powers and defensive prowess make her an impenetrable wall.',
    isML: true,
    baseHero: 'cecilia',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Tank and barrier creation',
    tags: ['tank', 'barrier', 'defense'],
    difficulty: 'Hard',
    usage: {
      pve: 7,
      pvp: 9,
      rta: 8,
      guildWar: 9
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.SS,
        guildWar: TierRank.SS,
        rta: TierRank.S
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'judge-kise',
    name: 'Judge Kise',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/judge-kise.png',
    description: 'A divine judge with powerful AoE abilities.',
    story: 'A divine judge with powerful AoE abilities. Her divine powers and judgment make her a force to be reckoned with.',
    isML: true,
    baseHero: 'kise',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'AoE damage and buff removal',
    tags: ['aoe', 'buff-removal', 'cleaver'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 8,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.A,
        guildWar: TierRank.A,
        rta: TierRank.B
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },

  {
    id: 'dark-corvus',
    name: 'Dark Corvus',
    rarity: 5,
    element: Element.DARK,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/dark-corvus.png',
    description: 'A corrupted warrior with immense defensive power.',
    story: 'A corrupted warrior with immense defensive power. His dark transformation grants him incredible strength and resilience.',
    isML: true,
    baseHero: 'corvus',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Tank and counter-attack',
    tags: ['tank', 'counter', 'bruiser'],
    difficulty: 'Hard',
    usage: {
      pve: 6,
      pvp: 8,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.A,
        guildWar: TierRank.A,
        rta: TierRank.B
      },
      pve: {
        wyvern: TierRank.C,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'martial-artist-ken',
    name: 'Martial Artist Ken',
    rarity: 5,
    element: Element.FIRE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/martial-artist-ken.png',
    description: 'A master martial artist with powerful counter abilities.',
    story: 'A master martial artist with powerful counter abilities. His mastery of martial arts makes him an unstoppable force.',
    isML: true,
    baseHero: 'ken',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Counter-attack and sustain',
    tags: ['counter', \'sustain', 'bruiser'],
    difficulty: 'Hard',
    usage: {
      pve: 7,
      pvp: 8,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.A,
        guildWar: TierRank.A,
        rta: TierRank.B
      },
      pve: {
        wyvern: TierRank.C,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'assassin-cidd',
    name: 'Assassin Cidd',
    rarity: 5,
    element: Element.EARTH,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/assassin-cidd.png',
    description: 'A deadly assassin with speed and precision.',
    story: 'A deadly assassin with speed and precision. His stealth and assassination skills make him a feared opponent.',
    isML: true,
    baseHero: 'cidd',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Speed and single target burst',
    tags: [\'speed', 'burst', 'assassin'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.C,
        golem: TierRank.B,
        banshee: TierRank.A,
        azimanak: TierRank.B,
        caides: TierRank.B,
        labyrinth: TierRank.B,
        abyss: TierRank.B
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'assassin-coli',
    name: 'Assassin Coli',
    rarity: 5,
    element: Element.ICE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/assassin-coli.png',
    description: 'A stealthy assassin with powerful single target damage.',
    story: 'A stealthy assassin with powerful single target damage. Her stealth and precision make her a deadly threat.',
    isML: true,
    baseHero: 'coli',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Stealth and single target burst',
    tags: [\'stealth', 'burst', 'assassin'],
    difficulty: 'Medium',
    usage: {
      pve: 5,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.C,
        golem: TierRank.B,
        banshee: TierRank.A,
        azimanak: TierRank.B,
        caides: TierRank.B,
        labyrinth: TierRank.B,
        abyss: TierRank.B
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'auxiliary-lots',
    name: 'Auxiliary Lots',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/auxiliary-lots.png',
    description: 'A powerful mage with CR manipulation abilities.',
    story: 'A powerful mage with CR manipulation abilities. His tactical mind and support skills make him invaluable.',
    isML: true,
    baseHero: 'lots',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'CR push and support',
    tags: ['cr-push', \'support', 'mage'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 8,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.A,
        guildWar: TierRank.A,
        rta: TierRank.B
      },
      pve: {
        wyvern: TierRank.A,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'challenger-dominiel',
    name: 'Challenger Dominiel',
    rarity: 5,
    element: Element.DARK,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/challenger-dominiel.png',
    description: 'A powerful mage with critical hit abilities.',
    story: 'A powerful mage with critical hit abilities. Her magical prowess and critical strikes make her a formidable opponent.',
    isML: true,
    baseHero: 'dominiel',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Critical hit and AoE damage',
    tags: ['crit', 'aoe', 'mage'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'blood-blade-karin',
    name: 'Blood Blade Karin',
    rarity: 5,
    element: Element.DARK,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/blood-blade-karin.png',
    description: 'A deadly assassin with stealth abilities.',
    story: 'A deadly assassin with stealth abilities. Her stealth and assassination skills make her a feared opponent.',
    isML: true,
    baseHero: 'karin',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Stealth and single target burst',
    tags: [\'stealth', 'burst', 'assassin'],
    difficulty: 'Medium',
    usage: {
      pve: 5,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.C,
        golem: TierRank.B,
        banshee: TierRank.A,
        azimanak: TierRank.B,
        caides: TierRank.B,
        labyrinth: TierRank.B,
        abyss: TierRank.B
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: \'shadow-rose',
    name: 'Shadow Rose',
    rarity: 5,
    element: Element.DARK,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/shadow-rose.png',
    description: 'A corrupted knight with powerful AoE abilities.',
    story: 'A corrupted knight with powerful AoE abilities. Her dark powers and AoE damage make her a destructive force.',
    isML: true,
    baseHero: 'rose',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'AoE damage and CR push',
    tags: ['aoe', 'cr-push', 'knight'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: \'silver-blade-aramintha',
    name: 'Silver Blade Aramintha',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/silver-blade-aramintha.png',
    description: 'A divine mage with powerful AoE abilities.',
    story: 'A divine mage with powerful AoE abilities. Her divine powers and magical prowess make her a formidable opponent.',
    isML: true,
    baseHero: 'aramintha',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'AoE damage and burn',
    tags: ['aoe', 'burn', 'mage'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.A,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'blaze-dingo',
    name: 'Blaze Dingo',
    rarity: 5,
    element: Element.FIRE,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/blaze-dingo.png',
    description: 'A fiery healer with powerful support abilities.',
    story: 'A fiery healer with powerful support abilities. His passion and healing powers bring warmth to allies.',
    isML: true,
    baseHero: 'dingo',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Healing and attack buff',
    tags: ['heal', 'attack-buff', \'support'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 6,
      rta: 5,
      guildWar: 6
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.A,
        golem: TierRank.S,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'guider-aither',
    name: 'Guider Aither',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/guider-aither.png',
    description: 'A divine healer with powerful support abilities.',
    story: 'A divine healer with powerful support abilities. His divine guidance and healing powers bring hope to allies.',
    isML: true,
    baseHero: 'aither',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Healing and CR push',
    tags: ['heal', 'cr-push', \'support'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 5,
      guildWar: 6
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.A,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  },
  {
    id: 'wanderer-silk',
    name: 'Wanderer Silk',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES, // Placeholder
    image: '/heroes/wanderer-silk.png',
    description: 'A divine archer with speed and precision.',
    story: 'A divine archer with speed and precision. Her divine guidance and archery skills make her a deadly opponent.',
    isML: true,
    baseHero: \'silk',
    releaseDate: '2018-08-30', // Placeholder
    specialty: 'Speed and single target damage',
    tags: [\'speed', \'single-target', 'ranger'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Excellent AoE damage', 'Self CR push on kill', 'Great for farming'],
    weaknesses: ['Squishy without investment', 'Vulnerable to control'],
    synergies: ['auxiliary-lots', 'tywin', 'rose'],
    counters: ['arbiter-vildred', 'ruele-of-light', 'fallen-cecilia'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4572,
        defense: 473,
        speed: 117
      },
      maxStats: {
        attack: 1871,
        health: 6897,
        defense: 716,
        speed: 117
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
        arena: TierRank.B,
        guildWar: TierRank.B,
        rta: TierRank.C
      },
      pve: {
        wyvern: TierRank.B,
        golem: TierRank.A,
        banshee: TierRank.A,
        azimanak: TierRank.A,
        caides: TierRank.A,
        labyrinth: TierRank.A,
        abyss: TierRank.A
      },
      lastUpdated: '2024-01-15'
    }
  }
];

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
