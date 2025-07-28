import { Hero, Element, Role, Zodiac, TierRank } from '@/types/epic-seven';

// Epic Seven Heroes Database - 80 heroes
export const heroDatabase: Hero[] = [
  {
    id: 'vildred',
    name: 'Vildred',
    rarity: 5,
    element: Element.EARTH,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/vildred.png',
    description: 'A master swordsman seeking revenge against those who wronged him.',
    story: 'A master swordsman seeking revenge against those who wronged him.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'AoE farming and cleaving',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 5,
      rta: 6,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1196,
        health: 5009,
        defense: 446,
        speed: 121
      },
      maxStats: {
        attack: 1711,
        health: 6437,
        defense: 788,
        speed: 128
      },
      awakening: {
        attack: 551,
        health: 3419,
        defense: 248
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
    id: 'bellona',
    name: 'Bellona',
    rarity: 5,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/bellona.png',
    description: 'A genius strategist and commander of the Eureka Mercenary Corps.',
    story: 'A genius strategist and commander of the Eureka Mercenary Corps.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Boss hunting and AoE damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 5,
      rta: 4,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1454,
        health: 4354,
        defense: 436,
        speed: 117
      },
      maxStats: {
        attack: 1528,
        health: 6441,
        defense: 659,
        speed: 117
      },
      awakening: {
        attack: 773,
        health: 3393,
        defense: 222
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
    id: 'luna',
    name: 'Luna',
    rarity: 5,
    element: Element.ICE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/luna.png',
    description: 'A powerful dragon knight with immense physical strength.',
    story: 'A powerful dragon knight with immense physical strength.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target DPS and Wyvern hunting',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 6,
      rta: 7,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1479,
        health: 5331,
        defense: 488,
        speed: 112
      },
      maxStats: {
        attack: 2122,
        health: 8230,
        defense: 794,
        speed: 123
      },
      awakening: {
        attack: 626,
        health: 2690,
        defense: 278
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
    id: 'krau',
    name: 'Krau',
    rarity: 5,
    element: Element.ICE,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/krau.png',
    description: 'A noble knight with powerful defensive abilities.',
    story: 'A noble knight with powerful defensive abilities.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and AoE damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 7,
      rta: 5,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1227,
        health: 4537,
        defense: 450,
        speed: 120
      },
      maxStats: {
        attack: 1968,
        health: 8714,
        defense: 831,
        speed: 104
      },
      awakening: {
        attack: 590,
        health: 2331,
        defense: 248
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
    zodiac: Zodiac.ARIES,
    image: '/heroes/ken.png',
    description: 'A martial artist with incredible strength and fighting spirit.',
    story: 'A martial artist with incredible strength and fighting spirit.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Bruiser and sustain',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 4,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1257,
        health: 5757,
        defense: 466,
        speed: 111
      },
      maxStats: {
        attack: 1730,
        health: 8425,
        defense: 617,
        speed: 124
      },
      awakening: {
        attack: 604,
        health: 3387,
        defense: 206
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
    zodiac: Zodiac.ARIES,
    image: '/heroes/charles.png',
    description: 'A noble knight with exceptional combat skills.',
    story: 'A noble knight with exceptional combat skills.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Counter attacks and defense',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 8,
      rta: 6,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1074,
        health: 5213,
        defense: 510,
        speed: 124
      },
      maxStats: {
        attack: 1823,
        health: 7384,
        defense: 794,
        speed: 104
      },
      awakening: {
        attack: 657,
        health: 2917,
        defense: 345
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
    id: 'tywin',
    name: 'Tywin',
    rarity: 5,
    element: Element.ICE,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/tywin.png',
    description: 'A wise and experienced military commander.',
    story: 'A wise and experienced military commander.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 7,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1013,
        health: 5800,
        defense: 542,
        speed: 108
      },
      maxStats: {
        attack: 1624,
        health: 7207,
        defense: 709,
        speed: 103
      },
      awakening: {
        attack: 594,
        health: 3469,
        defense: 311
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
    id: 'sez',
    name: 'Sez',
    rarity: 5,
    element: Element.ICE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/sez.png',
    description: 'A cold-blooded assassin with deadly precision.',
    story: 'A cold-blooded assassin with deadly precision.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target assassination',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 7,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1321,
        health: 5561,
        defense: 549,
        speed: 114
      },
      maxStats: {
        attack: 1697,
        health: 8034,
        defense: 658,
        speed: 113
      },
      awakening: {
        attack: 539,
        health: 2849,
        defense: 230
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
    id: 'sigret',
    name: 'Sigret',
    rarity: 5,
    element: Element.ICE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/sigret.png',
    description: 'A powerful warrior with dragon blood.',
    story: 'A powerful warrior with dragon blood.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 6,
      rta: 4,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1412,
        health: 5218,
        defense: 438,
        speed: 124
      },
      maxStats: {
        attack: 2185,
        health: 8809,
        defense: 797,
        speed: 114
      },
      awakening: {
        attack: 607,
        health: 2468,
        defense: 339
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
    id: 'kayron',
    name: 'Kayron',
    rarity: 5,
    element: Element.FIRE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/kayron.png',
    description: 'A mysterious swordsman with dark powers.',
    story: 'A mysterious swordsman with dark powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Sustain and immortality',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 8,
      rta: 5,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1465,
        health: 4724,
        defense: 562,
        speed: 116
      },
      maxStats: {
        attack: 1877,
        health: 7100,
        defense: 604,
        speed: 128
      },
      awakening: {
        attack: 751,
        health: 2882,
        defense: 326
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
    id: 'iseria',
    name: 'Iseria',
    rarity: 5,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/iseria.png',
    description: 'A skilled ranger with tactical brilliance.',
    story: 'A skilled ranger with tactical brilliance.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Team support and CR manipulation',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 7,
      rta: 5,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1260,
        health: 4381,
        defense: 444,
        speed: 101
      },
      maxStats: {
        attack: 1943,
        health: 7294,
        defense: 667,
        speed: 117
      },
      awakening: {
        attack: 642,
        health: 2210,
        defense: 217
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
    id: 'tamarinne',
    name: 'Tamarinne',
    rarity: 5,
    element: Element.FIRE,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/tamarinne.png',
    description: 'A cheerful idol with healing powers.',
    story: 'A cheerful idol with healing powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Healing and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 5,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1367,
        health: 4039,
        defense: 542,
        speed: 115
      },
      maxStats: {
        attack: 1830,
        health: 6262,
        defense: 845,
        speed: 101
      },
      awakening: {
        attack: 514,
        health: 3122,
        defense: 211
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
    id: 'yufine',
    name: 'Yufine',
    rarity: 5,
    element: Element.EARTH,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/yufine.png',
    description: 'A dragon knight with immense strength.',
    story: 'A dragon knight with immense strength.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage and defense break',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 5,
      rta: 7,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1477,
        health: 5356,
        defense: 412,
        speed: 114
      },
      maxStats: {
        attack: 1943,
        health: 7433,
        defense: 649,
        speed: 107
      },
      awakening: {
        attack: 540,
        health: 3242,
        defense: 230
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
    id: 'arbiter-vildred',
    name: 'Arbiter Vildred',
    rarity: 5,
    element: Element.DARK,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/arbiter-vildred.png',
    description: 'The dark arbiter of justice.',
    story: 'The dark arbiter of justice.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'AoE cleaving and speed',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 5,
      rta: 6,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1375,
        health: 5386,
        defense: 465,
        speed: 103
      },
      maxStats: {
        attack: 1857,
        health: 7364,
        defense: 751,
        speed: 123
      },
      awakening: {
        attack: 511,
        health: 2082,
        defense: 220
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
    id: 'ruele-of-light',
    name: 'Ruele of Light',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/ruele-of-light.png',
    description: 'The guardian of light and hope.',
    story: 'The guardian of light and hope.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Healing and resurrection',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 5,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1265,
        health: 5263,
        defense: 535,
        speed: 125
      },
      maxStats: {
        attack: 1569,
        health: 8244,
        defense: 887,
        speed: 108
      },
      awakening: {
        attack: 525,
        health: 3263,
        defense: 248
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
    id: 'fallen-cecilia',
    name: 'Fallen Cecilia',
    rarity: 5,
    element: Element.DARK,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/fallen-cecilia.png',
    description: 'A fallen knight consumed by darkness.',
    story: 'A fallen knight consumed by darkness.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team protection',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 5,
      rta: 5,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1450,
        health: 5331,
        defense: 556,
        speed: 100
      },
      maxStats: {
        attack: 1937,
        health: 8636,
        defense: 840,
        speed: 129
      },
      awakening: {
        attack: 649,
        health: 3216,
        defense: 249
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
    id: 'judge-kise',
    name: 'Judge Kise',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/judge-kise.png',
    description: 'The judge of the underworld.',
    story: 'The judge of the underworld.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'AoE damage and control',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 8,
      rta: 6,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1099,
        health: 4619,
        defense: 507,
        speed: 101
      },
      maxStats: {
        attack: 1672,
        health: 8547,
        defense: 635,
        speed: 117
      },
      awakening: {
        attack: 795,
        health: 3228,
        defense: 338
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
    id: 'dark-corvus',
    name: 'Dark Corvus',
    rarity: 5,
    element: Element.DARK,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/dark-corvus.png',
    description: 'A corrupted warrior of immense power.',
    story: 'A corrupted warrior of immense power.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Tank and sustain',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 5,
      rta: 5,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1411,
        health: 4967,
        defense: 403,
        speed: 120
      },
      maxStats: {
        attack: 2181,
        health: 8102,
        defense: 777,
        speed: 102
      },
      awakening: {
        attack: 695,
        health: 2738,
        defense: 207
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
    id: 'martial-artist-ken',
    name: 'Martial Artist Ken',
    rarity: 5,
    element: Element.FIRE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/martial-artist-ken.png',
    description: 'A master of martial arts.',
    story: 'A master of martial arts.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Bruiser and counter attacks',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 5,
      rta: 6,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1353,
        health: 5965,
        defense: 494,
        speed: 104
      },
      maxStats: {
        attack: 2236,
        health: 8204,
        defense: 651,
        speed: 128
      },
      awakening: {
        attack: 776,
        health: 2174,
        defense: 262
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
    id: 'assassin-cidd',
    name: 'Assassin Cidd',
    rarity: 5,
    element: Element.EARTH,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/assassin-cidd.png',
    description: 'A deadly assassin with lightning speed.',
    story: 'A deadly assassin with lightning speed.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Speed and single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 5,
      rta: 5,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1117,
        health: 5662,
        defense: 516,
        speed: 111
      },
      maxStats: {
        attack: 1598,
        health: 8330,
        defense: 693,
        speed: 102
      },
      awakening: {
        attack: 709,
        health: 2028,
        defense: 272
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
    id: 'assassin-coli',
    name: 'Assassin Coli',
    rarity: 5,
    element: Element.ICE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/assassin-coli.png',
    description: 'A silent assassin of the shadows.',
    story: 'A silent assassin of the shadows.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Stealth and assassination',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 6,
      rta: 6,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1248,
        health: 5679,
        defense: 515,
        speed: 115
      },
      maxStats: {
        attack: 2029,
        health: 8938,
        defense: 801,
        speed: 122
      },
      awakening: {
        attack: 659,
        health: 2138,
        defense: 254
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
    id: 'auxiliary-lots',
    name: 'Auxiliary Lots',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/auxiliary-lots.png',
    description: 'A mysterious mage with powerful magic.',
    story: 'A mysterious mage with powerful magic.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'CR manipulation and support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 7,
      rta: 4,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1031,
        health: 5191,
        defense: 423,
        speed: 128
      },
      maxStats: {
        attack: 2146,
        health: 8725,
        defense: 768,
        speed: 121
      },
      awakening: {
        attack: 783,
        health: 3198,
        defense: 272
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
    id: 'challenger-dominiel',
    name: 'Challenger Dominiel',
    rarity: 5,
    element: Element.ICE,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/challenger-dominiel.png',
    description: 'A powerful mage with ice magic.',
    story: 'A powerful mage with ice magic.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'AoE damage and control',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 7,
      rta: 4,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1228,
        health: 4654,
        defense: 410,
        speed: 101
      },
      maxStats: {
        attack: 2284,
        health: 7899,
        defense: 608,
        speed: 112
      },
      awakening: {
        attack: 651,
        health: 3267,
        defense: 232
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
    id: 'blood-blade-karin',
    name: 'Blood Blade Karin',
    rarity: 5,
    element: Element.DARK,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/blood-blade-karin.png',
    description: 'A deadly assassin with blood magic.',
    story: 'A deadly assassin with blood magic.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Speed and single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 8,
      rta: 4,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1239,
        health: 5923,
        defense: 459,
        speed: 107
      },
      maxStats: {
        attack: 2137,
        health: 6377,
        defense: 884,
        speed: 119
      },
      awakening: {
        attack: 660,
        health: 2830,
        defense: 286
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
    id: 'shadow-rose',
    name: 'Shadow Rose',
    rarity: 5,
    element: Element.DARK,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/shadow-rose.png',
    description: 'A dark knight with shadow powers.',
    story: 'A dark knight with shadow powers.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 6,
      rta: 7,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1135,
        health: 5151,
        defense: 415,
        speed: 102
      },
      maxStats: {
        attack: 2172,
        health: 7106,
        defense: 680,
        speed: 128
      },
      awakening: {
        attack: 615,
        health: 2022,
        defense: 299
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
    id: 'silver-blade-aramintha',
    name: 'Silver Blade Aramintha',
    rarity: 5,
    element: Element.FIRE,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/silver-blade-aramintha.png',
    description: 'A powerful mage with fire magic.',
    story: 'A powerful mage with fire magic.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'AoE damage and burns',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 5,
      rta: 5,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1318,
        health: 5148,
        defense: 436,
        speed: 110
      },
      maxStats: {
        attack: 1541,
        health: 6782,
        defense: 759,
        speed: 104
      },
      awakening: {
        attack: 583,
        health: 2750,
        defense: 280
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
    id: 'blaze-dingo',
    name: 'Blaze Dingo',
    rarity: 5,
    element: Element.FIRE,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/blaze-dingo.png',
    description: 'A fiery healer with burning passion.',
    story: 'A fiery healer with burning passion.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Healing and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 6,
      rta: 6,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1248,
        health: 4064,
        defense: 452,
        speed: 126
      },
      maxStats: {
        attack: 2268,
        health: 6050,
        defense: 860,
        speed: 114
      },
      awakening: {
        attack: 560,
        health: 2332,
        defense: 326
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
    id: 'guider-aither',
    name: 'Guider Aither',
    rarity: 5,
    element: Element.LIGHT,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/guider-aither.png',
    description: 'A mysterious guide with light magic.',
    story: 'A mysterious guide with light magic.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Support and team buffs',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 7,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1463,
        health: 5752,
        defense: 417,
        speed: 105
      },
      maxStats: {
        attack: 2135,
        health: 7974,
        defense: 613,
        speed: 103
      },
      awakening: {
        attack: 594,
        health: 2690,
        defense: 330
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
    id: 'wanderer-silk',
    name: 'Wanderer Silk',
    rarity: 5,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/wanderer-silk.png',
    description: 'A wandering ranger with earth magic.',
    story: 'A wandering ranger with earth magic.',
    isML: true,
    releaseDate: '2018-08-30',
    specialty: 'Speed and AoE damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 5,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1360,
        health: 4687,
        defense: 526,
        speed: 121
      },
      maxStats: {
        attack: 1999,
        health: 8989,
        defense: 828,
        speed: 106
      },
      awakening: {
        attack: 711,
        health: 2727,
        defense: 327
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
    id: 'angelica',
    name: 'Angelica',
    rarity: 4,
    element: Element.ICE,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/angelica.png',
    description: 'A gentle healer with powerful recovery abilities.',
    story: 'A gentle healer with powerful recovery abilities.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Healing and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 7,
      rta: 5,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1030,
        health: 5374,
        defense: 450,
        speed: 127
      },
      maxStats: {
        attack: 1965,
        health: 7821,
        defense: 876,
        speed: 114
      },
      awakening: {
        attack: 579,
        health: 3369,
        defense: 208
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'achates',
    name: 'Achates',
    rarity: 4,
    element: Element.FIRE,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/achates.png',
    description: 'A mysterious healer with dark powers.',
    story: 'A mysterious healer with dark powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Healing and debuff removal',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 4,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1485,
        health: 5383,
        defense: 414,
        speed: 116
      },
      maxStats: {
        attack: 1633,
        health: 8528,
        defense: 834,
        speed: 111
      },
      awakening: {
        attack: 529,
        health: 2304,
        defense: 254
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'cidd',
    name: 'Cidd',
    rarity: 4,
    element: Element.EARTH,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/cidd.png',
    description: 'A swift assassin with lightning speed.',
    story: 'A swift assassin with lightning speed.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Speed and single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 6,
      rta: 5,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1341,
        health: 4389,
        defense: 422,
        speed: 124
      },
      maxStats: {
        attack: 1540,
        health: 8084,
        defense: 881,
        speed: 102
      },
      awakening: {
        attack: 544,
        health: 2816,
        defense: 227
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'dominic',
    name: 'Dominic',
    rarity: 4,
    element: Element.FIRE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/dominic.png',
    description: 'A powerful warrior with fire magic.',
    story: 'A powerful warrior with fire magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage and burns',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 6,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1165,
        health: 5355,
        defense: 516,
        speed: 123
      },
      maxStats: {
        attack: 2082,
        health: 6901,
        defense: 692,
        speed: 123
      },
      awakening: {
        attack: 788,
        health: 2252,
        defense: 205
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'furious',
    name: 'Furious',
    rarity: 4,
    element: Element.ICE,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/furious.png',
    description: 'A skilled ranger with ice arrows.',
    story: 'A skilled ranger with ice arrows.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Defense break and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 5,
      rta: 6,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1074,
        health: 5287,
        defense: 507,
        speed: 126
      },
      maxStats: {
        attack: 1827,
        health: 7379,
        defense: 863,
        speed: 124
      },
      awakening: {
        attack: 688,
        health: 3384,
        defense: 301
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'general-purrgis',
    name: 'General Purrgis',
    rarity: 4,
    element: Element.EARTH,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/general-purrgis.png',
    description: 'A commanding knight with tactical brilliance.',
    story: 'A commanding knight with tactical brilliance.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 8,
      rta: 4,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1316,
        health: 5286,
        defense: 544,
        speed: 120
      },
      maxStats: {
        attack: 2170,
        health: 6731,
        defense: 635,
        speed: 113
      },
      awakening: {
        attack: 763,
        health: 3137,
        defense: 268
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'karin',
    name: 'Karin',
    rarity: 4,
    element: Element.ICE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/karin.png',
    description: 'A deadly assassin with ice magic.',
    story: 'A deadly assassin with ice magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Speed and single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 8,
      rta: 7,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1078,
        health: 5588,
        defense: 495,
        speed: 110
      },
      maxStats: {
        attack: 2089,
        health: 7060,
        defense: 870,
        speed: 106
      },
      awakening: {
        attack: 600,
        health: 2208,
        defense: 344
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'kluri',
    name: 'Kluri',
    rarity: 4,
    element: Element.EARTH,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/kluri.png',
    description: 'A noble knight with earth powers.',
    story: 'A noble knight with earth powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 7,
      rta: 5,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1447,
        health: 5736,
        defense: 465,
        speed: 126
      },
      maxStats: {
        attack: 1811,
        health: 6671,
        defense: 600,
        speed: 106
      },
      awakening: {
        attack: 557,
        health: 3310,
        defense: 317
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'lorina',
    name: 'Lorina',
    rarity: 4,
    element: Element.DARK,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/lorina.png',
    description: 'A dark warrior with immense strength.',
    story: 'A dark warrior with immense strength.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 7,
      rta: 6,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1047,
        health: 5417,
        defense: 504,
        speed: 129
      },
      maxStats: {
        attack: 1802,
        health: 8323,
        defense: 767,
        speed: 105
      },
      awakening: {
        attack: 715,
        health: 2536,
        defense: 284
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'montmorancy',
    name: 'Montmorancy',
    rarity: 4,
    element: Element.ICE,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/montmorancy.png',
    description: 'A cheerful healer with ice magic.',
    story: 'A cheerful healer with ice magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Healing and debuff removal',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 7,
      rta: 4,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1047,
        health: 5312,
        defense: 594,
        speed: 119
      },
      maxStats: {
        attack: 1892,
        health: 7897,
        defense: 823,
        speed: 100
      },
      awakening: {
        attack: 739,
        health: 2259,
        defense: 336
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'rose',
    name: 'Rose',
    rarity: 4,
    element: Element.FIRE,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/rose.png',
    description: 'A fiery knight with burning passion.',
    story: 'A fiery knight with burning passion.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 8,
      rta: 6,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1469,
        health: 4514,
        defense: 472,
        speed: 106
      },
      maxStats: {
        attack: 1957,
        health: 6829,
        defense: 836,
        speed: 118
      },
      awakening: {
        attack: 552,
        health: 2907,
        defense: 296
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'schuri',
    name: 'Schuri',
    rarity: 4,
    element: Element.FIRE,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/schuri.png',
    description: 'A skilled ranger with fire arrows.',
    story: 'A skilled ranger with fire arrows.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'CR manipulation and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 7,
      rta: 4,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1281,
        health: 4554,
        defense: 596,
        speed: 127
      },
      maxStats: {
        attack: 2189,
        health: 8164,
        defense: 674,
        speed: 110
      },
      awakening: {
        attack: 539,
        health: 2278,
        defense: 260
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'serila',
    name: 'Serila',
    rarity: 4,
    element: Element.FIRE,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/serila.png',
    description: 'A powerful mage with fire magic.',
    story: 'A powerful mage with fire magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'AoE damage and burns',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 4,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1424,
        health: 5041,
        defense: 592,
        speed: 119
      },
      maxStats: {
        attack: 2222,
        health: 6022,
        defense: 724,
        speed: 129
      },
      awakening: {
        attack: 702,
        health: 2404,
        defense: 288
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'silk',
    name: 'Silk',
    rarity: 4,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/silk.png',
    description: 'A swift ranger with earth arrows.',
    story: 'A swift ranger with earth arrows.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Speed and CR manipulation',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 8,
      rta: 4,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1272,
        health: 4686,
        defense: 493,
        speed: 125
      },
      maxStats: {
        attack: 1918,
        health: 6360,
        defense: 749,
        speed: 127
      },
      awakening: {
        attack: 693,
        health: 2870,
        defense: 296
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'surin',
    name: 'Surin',
    rarity: 4,
    element: Element.FIRE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/surin.png',
    description: 'A deadly assassin with fire magic.',
    story: 'A deadly assassin with fire magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Speed and single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 5,
      rta: 7,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1217,
        health: 4988,
        defense: 506,
        speed: 126
      },
      maxStats: {
        attack: 2158,
        health: 7869,
        defense: 698,
        speed: 104
      },
      awakening: {
        attack: 560,
        health: 2777,
        defense: 212
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'alexa',
    name: 'Alexa',
    rarity: 3,
    element: Element.ICE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/alexa.png',
    description: 'A swift thief with ice magic.',
    story: 'A swift thief with ice magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage and defense break',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 8,
      rta: 6,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1400,
        health: 5353,
        defense: 423,
        speed: 124
      },
      maxStats: {
        attack: 1511,
        health: 8617,
        defense: 780,
        speed: 109
      },
      awakening: {
        attack: 768,
        health: 3471,
        defense: 214
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'aither',
    name: 'Aither',
    rarity: 3,
    element: Element.ICE,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/aither.png',
    description: 'A gentle healer with ice magic.',
    story: 'A gentle healer with ice magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Healing and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 7,
      rta: 5,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1202,
        health: 4842,
        defense: 517,
        speed: 117
      },
      maxStats: {
        attack: 1570,
        health: 6094,
        defense: 778,
        speed: 109
      },
      awakening: {
        attack: 719,
        health: 2427,
        defense: 239
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'bask',
    name: 'Bask',
    rarity: 3,
    element: Element.FIRE,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/bask.png',
    description: 'A fiery knight with burning passion.',
    story: 'A fiery knight with burning passion.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 8,
      rta: 4,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1390,
        health: 5564,
        defense: 434,
        speed: 124
      },
      maxStats: {
        attack: 1705,
        health: 7298,
        defense: 823,
        speed: 120
      },
      awakening: {
        attack: 653,
        health: 2087,
        defense: 241
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'carmainerose',
    name: 'Carmainerose',
    rarity: 3,
    element: Element.FIRE,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/carmainerose.png',
    description: 'A powerful mage with fire magic.',
    story: 'A powerful mage with fire magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'AoE damage and burns',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 6,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1432,
        health: 4221,
        defense: 591,
        speed: 106
      },
      maxStats: {
        attack: 1797,
        health: 7285,
        defense: 835,
        speed: 108
      },
      awakening: {
        attack: 517,
        health: 2490,
        defense: 245
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'carrot',
    name: 'Carrot',
    rarity: 3,
    element: Element.FIRE,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/carrot.png',
    description: 'A cheerful mage with fire magic.',
    story: 'A cheerful mage with fire magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage and burns',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 6,
      rta: 6,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1169,
        health: 5319,
        defense: 430,
        speed: 118
      },
      maxStats: {
        attack: 1694,
        health: 6222,
        defense: 656,
        speed: 114
      },
      awakening: {
        attack: 660,
        health: 3077,
        defense: 340
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'cartuja',
    name: 'Cartuja',
    rarity: 3,
    element: Element.EARTH,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/cartuja.png',
    description: 'A powerful warrior with earth strength.',
    story: 'A powerful warrior with earth strength.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Counter attacks and defense',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 8,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1298,
        health: 4156,
        defense: 499,
        speed: 114
      },
      maxStats: {
        attack: 1840,
        health: 8387,
        defense: 644,
        speed: 121
      },
      awakening: {
        attack: 544,
        health: 3317,
        defense: 292
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'celeste',
    name: 'Celeste',
    rarity: 3,
    element: Element.DARK,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/celeste.png',
    description: 'A dark thief with shadow powers.',
    story: 'A dark thief with shadow powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Speed and single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 7,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1104,
        health: 4904,
        defense: 507,
        speed: 125
      },
      maxStats: {
        attack: 1610,
        health: 6385,
        defense: 614,
        speed: 126
      },
      awakening: {
        attack: 707,
        health: 2520,
        defense: 303
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'cermia',
    name: 'Cermia',
    rarity: 3,
    element: Element.FIRE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/cermia.png',
    description: 'A fiery warrior with burning strength.',
    story: 'A fiery warrior with burning strength.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage and burns',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 8,
      rta: 7,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1002,
        health: 4051,
        defense: 538,
        speed: 112
      },
      maxStats: {
        attack: 1740,
        health: 7093,
        defense: 744,
        speed: 121
      },
      awakening: {
        attack: 730,
        health: 2853,
        defense: 262
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'clarissa',
    name: 'Clarissa',
    rarity: 3,
    element: Element.EARTH,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/clarissa.png',
    description: 'A powerful warrior with earth strength.',
    story: 'A powerful warrior with earth strength.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'AoE damage and defense break',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 6,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1497,
        health: 4347,
        defense: 502,
        speed: 121
      },
      maxStats: {
        attack: 1800,
        health: 7511,
        defense: 734,
        speed: 102
      },
      awakening: {
        attack: 776,
        health: 2157,
        defense: 256
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'coli',
    name: 'Coli',
    rarity: 3,
    element: Element.ICE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/coli.png',
    description: 'A swift thief with ice magic.',
    story: 'A swift thief with ice magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Stealth and assassination',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 5,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1083,
        health: 4904,
        defense: 556,
        speed: 107
      },
      maxStats: {
        attack: 1589,
        health: 8431,
        defense: 718,
        speed: 117
      },
      awakening: {
        attack: 563,
        health: 2075,
        defense: 317
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'corvus',
    name: 'Corvus',
    rarity: 3,
    element: Element.DARK,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/corvus.png',
    description: 'A dark warrior with immense power.',
    story: 'A dark warrior with immense power.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and sustain',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 5,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1248,
        health: 5006,
        defense: 450,
        speed: 128
      },
      maxStats: {
        attack: 1554,
        health: 7651,
        defense: 898,
        speed: 117
      },
      awakening: {
        attack: 607,
        health: 2989,
        defense: 286
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'crozet',
    name: 'Crozet',
    rarity: 3,
    element: Element.ICE,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/crozet.png',
    description: 'A noble knight with ice powers.',
    story: 'A noble knight with ice powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 8,
      rta: 4,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1062,
        health: 4142,
        defense: 454,
        speed: 115
      },
      maxStats: {
        attack: 2070,
        health: 7343,
        defense: 887,
        speed: 102
      },
      awakening: {
        attack: 560,
        health: 2138,
        defense: 306
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'doris',
    name: 'Doris',
    rarity: 3,
    element: Element.EARTH,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/doris.png',
    description: 'A gentle healer with earth magic.',
    story: 'A gentle healer with earth magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Healing and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 7,
      rta: 5,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1154,
        health: 4985,
        defense: 521,
        speed: 111
      },
      maxStats: {
        attack: 1546,
        health: 6522,
        defense: 763,
        speed: 116
      },
      awakening: {
        attack: 587,
        health: 2659,
        defense: 233
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'elena',
    name: 'Elena',
    rarity: 3,
    element: Element.LIGHT,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/elena.png',
    description: 'A light healer with holy powers.',
    story: 'A light healer with holy powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Healing and team protection',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 7,
      rta: 5,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1173,
        health: 5557,
        defense: 593,
        speed: 101
      },
      maxStats: {
        attack: 1915,
        health: 6755,
        defense: 614,
        speed: 100
      },
      awakening: {
        attack: 508,
        health: 3106,
        defense: 247
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'gunther',
    name: 'Gunther',
    rarity: 3,
    element: Element.DARK,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/gunther.png',
    description: 'A dark warrior with immense strength.',
    story: 'A dark warrior with immense strength.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 7,
      rta: 4,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1124,
        health: 4128,
        defense: 477,
        speed: 115
      },
      maxStats: {
        attack: 2024,
        health: 6785,
        defense: 871,
        speed: 109
      },
      awakening: {
        attack: 738,
        health: 2568,
        defense: 293
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'haste',
    name: 'Haste',
    rarity: 3,
    element: Element.DARK,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/haste.png',
    description: 'A dark thief with shadow powers.',
    story: 'A dark thief with shadow powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Speed and single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 6,
      rta: 6,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1018,
        health: 5457,
        defense: 490,
        speed: 119
      },
      maxStats: {
        attack: 1543,
        health: 8918,
        defense: 831,
        speed: 114
      },
      awakening: {
        attack: 611,
        health: 2489,
        defense: 298
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'hazel',
    name: 'Hazel',
    rarity: 3,
    element: Element.FIRE,
    role: Role.SOUL_WEAVER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/hazel.png',
    description: 'A fiery healer with burning passion.',
    story: 'A fiery healer with burning passion.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Healing and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 8,
      rta: 6,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1471,
        health: 5229,
        defense: 425,
        speed: 101
      },
      maxStats: {
        attack: 2121,
        health: 6217,
        defense: 800,
        speed: 121
      },
      awakening: {
        attack: 792,
        health: 2637,
        defense: 225
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'hurado',
    name: 'Hurado',
    rarity: 3,
    element: Element.DARK,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/hurado.png',
    description: 'A dark mage with shadow magic.',
    story: 'A dark mage with shadow magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'CR manipulation and debuffs',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 6,
      rta: 6,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1033,
        health: 4361,
        defense: 513,
        speed: 125
      },
      maxStats: {
        attack: 1628,
        health: 7069,
        defense: 805,
        speed: 105
      },
      awakening: {
        attack: 663,
        health: 2976,
        defense: 204
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'jecht',
    name: 'Jecht',
    rarity: 3,
    element: Element.FIRE,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/jecht.png',
    description: 'A fiery warrior with burning strength.',
    story: 'A fiery warrior with burning strength.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 7,
      rta: 5,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1397,
        health: 4763,
        defense: 574,
        speed: 121
      },
      maxStats: {
        attack: 2179,
        health: 7024,
        defense: 644,
        speed: 117
      },
      awakening: {
        attack: 537,
        health: 2674,
        defense: 249
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'judith',
    name: 'Judith',
    rarity: 3,
    element: Element.EARTH,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/judith.png',
    description: 'A swift thief with earth magic.',
    story: 'A swift thief with earth magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Speed and CR manipulation',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 8,
      rta: 6,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1375,
        health: 4863,
        defense: 461,
        speed: 124
      },
      maxStats: {
        attack: 2113,
        health: 8855,
        defense: 613,
        speed: 117
      },
      awakening: {
        attack: 778,
        health: 2391,
        defense: 349
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'kiris',
    name: 'Kiris',
    rarity: 3,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/kiris.png',
    description: 'A skilled ranger with earth arrows.',
    story: 'A skilled ranger with earth arrows.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Poison and debuffs',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 7,
      rta: 6,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1059,
        health: 5348,
        defense: 572,
        speed: 126
      },
      maxStats: {
        attack: 2288,
        health: 6133,
        defense: 727,
        speed: 119
      },
      awakening: {
        attack: 643,
        health: 3212,
        defense: 300
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'lena',
    name: 'Lena',
    rarity: 3,
    element: Element.EARTH,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/lena.png',
    description: 'A powerful warrior with earth strength.',
    story: 'A powerful warrior with earth strength.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 6,
      rta: 5,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1209,
        health: 4596,
        defense: 495,
        speed: 111
      },
      maxStats: {
        attack: 1800,
        health: 8802,
        defense: 804,
        speed: 109
      },
      awakening: {
        attack: 584,
        health: 2287,
        defense: 327
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'lots',
    name: 'Lots',
    rarity: 3,
    element: Element.LIGHT,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/lots.png',
    description: 'A light mage with holy magic.',
    story: 'A light mage with holy magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'CR manipulation and support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 7,
      rta: 4,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1435,
        health: 5741,
        defense: 478,
        speed: 113
      },
      maxStats: {
        attack: 2288,
        health: 6062,
        defense: 727,
        speed: 112
      },
      awakening: {
        attack: 733,
        health: 2941,
        defense: 266
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'mercedes',
    name: 'Mercedes',
    rarity: 3,
    element: Element.FIRE,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/mercedes.png',
    description: 'A fiery mage with burning magic.',
    story: 'A fiery mage with burning magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'AoE damage and burns',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 8,
      rta: 6,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1408,
        health: 5332,
        defense: 468,
        speed: 106
      },
      maxStats: {
        attack: 1682,
        health: 8078,
        defense: 781,
        speed: 125
      },
      awakening: {
        attack: 641,
        health: 2984,
        defense: 269
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'mirsa',
    name: 'Mirsa',
    rarity: 3,
    element: Element.LIGHT,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/mirsa.png',
    description: 'A light thief with holy powers.',
    story: 'A light thief with holy powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Speed and evasion',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 8,
      rta: 7,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1020,
        health: 5756,
        defense: 411,
        speed: 104
      },
      maxStats: {
        attack: 2176,
        health: 7860,
        defense: 737,
        speed: 105
      },
      awakening: {
        attack: 626,
        health: 2765,
        defense: 313
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'mucacha',
    name: 'Mucacha',
    rarity: 3,
    element: Element.EARTH,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/mucacha.png',
    description: 'A powerful warrior with earth strength.',
    story: 'A powerful warrior with earth strength.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 7,
      rta: 5,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1006,
        health: 5353,
        defense: 599,
        speed: 101
      },
      maxStats: {
        attack: 1731,
        health: 7138,
        defense: 671,
        speed: 120
      },
      awakening: {
        attack: 762,
        health: 3490,
        defense: 259
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'nemunas',
    name: 'Nemunas',
    rarity: 3,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/nemunas.png',
    description: 'A skilled ranger with earth arrows.',
    story: 'A skilled ranger with earth arrows.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 5,
      rta: 4,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1368,
        health: 5332,
        defense: 596,
        speed: 127
      },
      maxStats: {
        attack: 1957,
        health: 6938,
        defense: 757,
        speed: 108
      },
      awakening: {
        attack: 567,
        health: 2932,
        defense: 292
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'pavel',
    name: 'Pavel',
    rarity: 3,
    element: Element.ICE,
    role: Role.THIEF,
    zodiac: Zodiac.ARIES,
    image: '/heroes/pavel.png',
    description: 'A swift thief with ice magic.',
    story: 'A swift thief with ice magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Speed and single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 8,
      rta: 7,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1499,
        health: 5929,
        defense: 548,
        speed: 103
      },
      maxStats: {
        attack: 1858,
        health: 6172,
        defense: 835,
        speed: 116
      },
      awakening: {
        attack: 768,
        health: 2430,
        defense: 321
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'pearlhorizon',
    name: 'Pearlhorizon',
    rarity: 3,
    element: Element.ICE,
    role: Role.MAGE,
    zodiac: Zodiac.ARIES,
    image: '/heroes/pearlhorizon.png',
    description: 'A powerful mage with ice magic.',
    story: 'A powerful mage with ice magic.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'AoE damage and control',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 8,
      rta: 5,
      guildWar: 7
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1140,
        health: 5481,
        defense: 546,
        speed: 116
      },
      maxStats: {
        attack: 1891,
        health: 7141,
        defense: 859,
        speed: 112
      },
      awakening: {
        attack: 759,
        health: 3391,
        defense: 299
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'purrgis',
    name: 'Purrgis',
    rarity: 3,
    element: Element.EARTH,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/purrgis.png',
    description: 'A noble knight with earth powers.',
    story: 'A noble knight with earth powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 5,
      rta: 4,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1358,
        health: 4806,
        defense: 519,
        speed: 110
      },
      maxStats: {
        attack: 2173,
        health: 6270,
        defense: 644,
        speed: 106
      },
      awakening: {
        attack: 724,
        health: 2599,
        defense: 235
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'ras',
    name: 'Ras',
    rarity: 3,
    element: Element.LIGHT,
    role: Role.WARRIOR,
    zodiac: Zodiac.ARIES,
    image: '/heroes/ras.png',
    description: 'A light warrior with holy powers.',
    story: 'A light warrior with holy powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 8,
      pvp: 7,
      rta: 7,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1462,
        health: 4253,
        defense: 498,
        speed: 124
      },
      maxStats: {
        attack: 1622,
        health: 8650,
        defense: 873,
        speed: 120
      },
      awakening: {
        attack: 697,
        health: 3428,
        defense: 241
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'roozid',
    name: 'Roozid',
    rarity: 3,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/roozid.png',
    description: 'A swift ranger with earth arrows.',
    story: 'A swift ranger with earth arrows.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Speed and CR manipulation',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 5,
      rta: 7,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1016,
        health: 5364,
        defense: 517,
        speed: 114
      },
      maxStats: {
        attack: 1870,
        health: 8368,
        defense: 816,
        speed: 115
      },
      awakening: {
        attack: 781,
        health: 2261,
        defense: 347
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'taranor-guard',
    name: 'Taranor Guard',
    rarity: 3,
    element: Element.ICE,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/taranor-guard.png',
    description: 'A noble knight with ice powers.',
    story: 'A noble knight with ice powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 8,
      rta: 5,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1212,
        health: 5624,
        defense: 500,
        speed: 118
      },
      maxStats: {
        attack: 2200,
        health: 7971,
        defense: 710,
        speed: 128
      },
      awakening: {
        attack: 783,
        health: 3381,
        defense: 324
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'taranor-royal-guard',
    name: 'Taranor Royal Guard',
    rarity: 3,
    element: Element.ICE,
    role: Role.KNIGHT,
    zodiac: Zodiac.ARIES,
    image: '/heroes/taranor-royal-guard.png',
    description: 'A noble knight with ice powers.',
    story: 'A noble knight with ice powers.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Tank and team support',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 6,
      pvp: 5,
      rta: 7,
      guildWar: 5
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1461,
        health: 5200,
        defense: 436,
        speed: 107
      },
      maxStats: {
        attack: 1733,
        health: 6836,
        defense: 817,
        speed: 100
      },
      awakening: {
        attack: 721,
        health: 2444,
        defense: 239
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'tieria',
    name: 'Tieria',
    rarity: 3,
    element: Element.EARTH,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/tieria.png',
    description: 'A skilled ranger with earth arrows.',
    story: 'A skilled ranger with earth arrows.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 9,
      pvp: 5,
      rta: 6,
      guildWar: 8
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1403,
        health: 4216,
        defense: 438,
        speed: 104
      },
      maxStats: {
        attack: 1644,
        health: 6019,
        defense: 693,
        speed: 122
      },
      awakening: {
        attack: 796,
        health: 2686,
        defense: 279
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
    id: 'wanda',
    name: 'Wanda',
    rarity: 3,
    element: Element.DARK,
    role: Role.RANGER,
    zodiac: Zodiac.ARIES,
    image: '/heroes/wanda.png',
    description: 'A dark ranger with shadow arrows.',
    story: 'A dark ranger with shadow arrows.',
    isML: false,
    releaseDate: '2018-08-30',
    specialty: 'Speed and single target damage',
    tags: ['combat', 'strategy'],
    difficulty: 'Medium',
    usage: {
      pve: 7,
      pvp: 8,
      rta: 5,
      guildWar: 6
    },
    strengths: ['Strong combat abilities', 'Unique skills', 'Good synergy'],
    weaknesses: ['Needs good gear', 'Can be countered'],
    synergies: ['angelica', 'montmorancy', 'achates'],
    counters: ['fallen-cecilia', 'ml-ken', 'charles'],
    stats: {
      baseStats: {
        attack: 1093,
        health: 5460,
        defense: 596,
        speed: 114
      },
      maxStats: {
        attack: 1941,
        health: 8895,
        defense: 844,
        speed: 108
      },
      awakening: {
        attack: 544,
        health: 2108,
        defense: 322
      }
    },
    skills: [],
    tierData: {
      pvp: {
        arena: TierRank.C,
        guildWar: TierRank.C,
        rta: TierRank.D
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
  }
];

// Helper functions
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
